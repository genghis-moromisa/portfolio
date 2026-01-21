import type { ReactNode } from 'react';

type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  children?: ReactNode;
};

export function SectionHeading({ title, eyebrow, children }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-3">
      {eyebrow ? (
        <span className="text-xs uppercase tracking-[0.32em] text-muted">{eyebrow}</span>
      ) : null}
      <h2 className="text-3xl font-serif tracking-tightest sm:text-4xl">{title}</h2>
      {children ? <p className="max-w-2xl text-base leading-relaxed text-muted">{children}</p> : null}
    </div>
  );
}
