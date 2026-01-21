import type { Metadata } from 'next';
import Link from 'next/link';

import { renderMarkdown, getPostBySlug, getWritingSlugs } from '@/lib/markdown';

type WritingPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return getWritingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: WritingPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  return {
    title: post.meta.title,
    description: post.meta.summary
  };
}

export default async function WritingDetailPage({ params }: WritingPageProps) {
  const post = getPostBySlug(params.slug);
  const html = await renderMarkdown(post.content);

  return (
    <article className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">{post.meta.date}</p>
        <h1 className="text-4xl font-serif tracking-tightest sm:text-5xl">{post.meta.title}</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted">{post.meta.summary}</p>
        <div className="flex flex-wrap gap-2">
          {post.meta.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
      <Link href="/writing" className="text-xs uppercase tracking-[0.3em] text-accent">
        Back to Writing
      </Link>
    </article>
  );
}
