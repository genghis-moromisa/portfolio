import siteData from '@/content/site.json';

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-6 pb-12 pt-12 text-sm text-muted">
      <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p>{siteData.footer.note}</p>
        <p className="text-xs uppercase tracking-[0.25em]">{siteData.footer.location}</p>
      </div>
    </footer>
  );
}
