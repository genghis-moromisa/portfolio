import Script from 'next/script';

const themeScript = `(() => {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
})();`;

export function ThemeScript() {
  return (
    <Script id="theme-script" strategy="beforeInteractive">
      {themeScript}
    </Script>
  );
}
