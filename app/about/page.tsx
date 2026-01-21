import { SectionHeading } from '@/components/section-heading';

export const metadata = {
  title: 'About'
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading title="About" eyebrow="Profile">
        I partner with design and product leaders to elevate premium digital experiences with a focus on typography,
        pacing, and system integrity.
      </SectionHeading>
      <div className="grid gap-6 text-base leading-relaxed text-muted">
        <p>
          Based in Tokyo, I blend visual design and engineering to build sites that feel quiet, intentional, and fast.
          My work spans brand platforms, digital editorials, and product marketing for studios and global teams.
        </p>
        <p>
          When I am not shipping, I study material archives, photograph modernist interiors, and prototype new
          narrative layouts.
        </p>
        <div className="grid gap-4 rounded-3xl border border-border bg-accentSoft p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Focus</p>
            <p className="mt-2 text-lg text-text">Design systems, frontend architecture, editorial storytelling.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Services</p>
            <p className="mt-2 text-lg text-text">
              Digital art direction, web development, performance optimization, launch strategy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
