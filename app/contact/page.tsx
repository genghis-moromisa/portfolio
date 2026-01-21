import { SectionHeading } from '@/components/section-heading';

export const metadata = {
  title: 'Contact'
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading title="Contact" eyebrow="Availability">
        Currently taking on a select number of brand platform and editorial builds for 2025.
      </SectionHeading>
      <div className="grid gap-6 rounded-3xl border border-border bg-accentSoft p-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Email</p>
          <a href="mailto:studio@kaitomori.com" className="text-2xl font-serif tracking-tightest">
            studio@kaitomori.com
          </a>
        </div>
        <div className="flex flex-wrap gap-6 text-sm uppercase tracking-[0.3em] text-muted">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://www.behance.net" target="_blank" rel="noreferrer">
            Behance
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
