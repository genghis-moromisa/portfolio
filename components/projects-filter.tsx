'use client';

import { useMemo, useState } from 'react';

import type { Project } from '@/content/projects';

const ALL_TAG = 'All';

type ProjectsFilterProps = {
  projects: Project[];
};

export function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const tags = useMemo(() => {
    const unique = new Set<string>();
    projects.forEach((project) => project.tags.forEach((tag) => unique.add(tag)));
    return [ALL_TAG, ...Array.from(unique)];
  }, [projects]);

  const [activeTag, setActiveTag] = useState(ALL_TAG);

  const filtered = useMemo(() => {
    if (activeTag === ALL_TAG) return projects;
    return projects.filter((project) => project.tags.includes(activeTag));
  }, [activeTag, projects]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition ${
              activeTag === tag
                ? 'border-accent bg-accentSoft text-accent'
                : 'border-border text-muted hover:border-accent hover:text-accent'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid gap-6">
        {filtered.map((project) => (
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
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-muted">
                  {tag}
                </span>
              ))}
            </div>
            {project.link ? (
              <a
                href={project.link}
                className="mt-4 inline-flex text-xs uppercase tracking-[0.28em] text-accent"
                target="_blank"
                rel="noreferrer"
              >
                View project
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
