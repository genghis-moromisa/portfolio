import { SectionHeading } from '@/components/section-heading';
import siteData from '@/content/site.json';

export const metadata = {
  title: 'About'
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading title="About" eyebrow="Profile">
        {siteData.about.intro}
      </SectionHeading>
      <div className="grid gap-6 text-base leading-relaxed text-muted">
        {siteData.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {siteData.about.focus || siteData.about.services ? (
          <div className="grid gap-4 rounded-3xl border border-border bg-accentSoft p-6">
            {siteData.about.focus ? (
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted">Focus</p>
                <p className="mt-2 text-lg text-text">{siteData.about.focus}</p>
              </div>
            ) : null}
            {siteData.about.services ? (
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted">Services</p>
                <p className="mt-2 text-lg text-text">{siteData.about.services}</p>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
