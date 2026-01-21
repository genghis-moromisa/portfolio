type Env = {
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;
  ALLOWED_ORIGIN: string;
};

const TOKEN_URL = 'https://github.com/login/oauth/access_token';
const AUTHORIZE_URL = 'https://github.com/login/oauth/authorize';

function jsonResponse(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  });
}

function parseCookies(request: Request) {
  const header = request.headers.get('Cookie') || '';
  return header.split(';').reduce<Record<string, string>>((acc, part) => {
    const [key, ...rest] = part.trim().split('=');
    if (!key) return acc;
    acc[key] = decodeURIComponent(rest.join('='));
    return acc;
  }, {});
}

function randomState() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
}

function htmlResponse(html: string, status = 200) {
  return new Response(html, {
    status,
    headers: {
      'content-type': 'text/html; charset=utf-8'
    }
  });
}

function buildMessage(provider: string, payload: Record<string, string>) {
  return `authorization:${provider}:${payload.status}:${JSON.stringify(payload)}`;
}

function scriptResponse(origin: string, provider: string, payload: Record<string, string>) {
  const message = buildMessage(provider, payload);
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Authorizing…</title>
  </head>
  <body>
    <script>
      (function () {
        const target = ${JSON.stringify(origin)};
        const message = ${JSON.stringify(message)};
        if (window.opener) {
          window.opener.postMessage(message, target);
        }
        window.close();
      })();
    </script>
    <p>Authorization complete. You can close this window.</p>
  </body>
</html>`;
  return htmlResponse(html);
}

export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url);
    const origin = env.ALLOWED_ORIGIN;

    if (url.pathname === '/auth') {
      const provider = url.searchParams.get('provider');
      if (provider !== 'github') {
        return jsonResponse({ error: 'Unsupported provider' }, 400);
      }

      const scope = url.searchParams.get('scope') || 'repo';
      const state = randomState();
      const redirectUri = `${url.origin}/callback`;

      const authUrl = new URL(AUTHORIZE_URL);
      authUrl.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
      authUrl.searchParams.set('redirect_uri', redirectUri);
      authUrl.searchParams.set('scope', scope);
      authUrl.searchParams.set('state', state);

      return new Response(null, {
        status: 302,
        headers: {
          Location: authUrl.toString(),
          'Set-Cookie': `oauth_state=${state}; HttpOnly; Secure; Path=/; SameSite=Lax`
        }
      });
    }

    if (url.pathname === '/callback') {
      const provider = url.searchParams.get('provider') || 'github';
      const code = url.searchParams.get('code');
      const state = url.searchParams.get('state');
      const cookies = parseCookies(request);

      if (!code) {
        return scriptResponse(origin, provider, { status: 'error', error: 'Missing code' });
      }

      if (!state || !cookies.oauth_state || state !== cookies.oauth_state) {
        return scriptResponse(origin, provider, { status: 'error', error: 'State mismatch' });
      }

      const tokenResponse = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
          redirect_uri: `${url.origin}/callback`
        })
      });

      if (!tokenResponse.ok) {
        return scriptResponse(origin, provider, { status: 'error', error: 'Token exchange failed' });
      }

      const tokenData = (await tokenResponse.json()) as { access_token?: string; error?: string };
      if (!tokenData.access_token) {
        return scriptResponse(origin, provider, { status: 'error', error: tokenData.error || 'No token' });
      }

      return scriptResponse(origin, provider, {
        status: 'success',
        token: tokenData.access_token
      });
    }

    return jsonResponse({ status: 'ok' });
  }
};
