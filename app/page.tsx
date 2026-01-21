import Link from 'next/link';

import { SectionHeading } from '@/components/section-heading';
import { projects } from '@/content/projects';
import { getAllPosts } from '@/lib/markdown';

export const metadata = {
  title: 'Home'
};

export default function HomePage() {
  const recentProjects = projects.slice(0, 2);
  const recentPosts = getAllPosts().slice(0, 2);

  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-8">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Portfolio · 2025</p>
        <h1 className="text-4xl font-serif tracking-tightest sm:text-6xl">
          Crafting calm, high-end digital experiences for luxury brands and future-facing teams.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          I help premium products communicate with restraint and precision. My practice blends design systems,
          editorial storytelling, and performance-first engineering.
        </p>
        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-muted">
          <span>Design Systems</span>
          <span>Frontend Engineering</span>
          <span>Brand Experience</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-full border border-accent bg-accent px-6 py-3 text-xs uppercase tracking-[0.3em] text-white"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-border px-6 py-3 text-xs uppercase tracking-[0.3em] text-muted"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <SectionHeading title="Selected Work" eyebrow="Projects">
          A curated set of collaborations spanning retail, mobility, and editorial storytelling.
        </SectionHeading>
        <div className="grid gap-6">
          {recentProjects.map((project) => (
            <article key={project.title} className="rounded-3xl border border-border bg-accentSoft p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-serif tracking-tightest">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted">{project.summary}</p>
                </div>
                <div className="text-xs uppercase tracking-[0.3em] text-muted">
                  <p>{project.year}</p>
                  <p>{project.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <Link href="/projects" className="text-xs uppercase tracking-[0.3em] text-accent">
          Explore all projects
        </Link>
      </section>

      <section className="flex flex-col gap-6">
        <SectionHeading title="Writing" eyebrow="Essays">
          Notes on systems thinking, typography, and building for longevity.
        </SectionHeading>
        <div className="grid gap-4">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="rounded-2xl border border-border px-5 py-4"
            >
              <h3 className="text-xl font-serif tracking-tightest">{post.meta.title}</h3>
              <p className="mt-2 text-sm text-muted">{post.meta.summary}</p>
            </Link>
          ))}
        </div>
        <Link href="/writing" className="text-xs uppercase tracking-[0.3em] text-accent">
          Read all writing
        </Link>
      </section>
    </div>
  );
}
