import { SectionHeading } from '@/components/section-heading';
import siteData from '@/content/site.json';

export const metadata = {
  title: 'Contact'
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading title="Contact" eyebrow="Availability">
        {siteData.contact.availability || undefined}
      </SectionHeading>
      <div className="grid gap-6 rounded-3xl border border-border bg-accentSoft p-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Email</p>
          <a href={`mailto:${siteData.contact.email}`} className="text-2xl font-serif tracking-tightest">
            {siteData.contact.email}
          </a>
        </div>
        <div className="flex flex-wrap gap-6 text-sm uppercase tracking-[0.3em] text-muted">
          {siteData.contact.socials.map((social) => (
            <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
