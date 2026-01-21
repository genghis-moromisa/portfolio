import Link from 'next/link';

import { SectionHeading } from '@/components/section-heading';
import { getAllPosts } from '@/lib/markdown';

export const metadata = {
  title: 'Writing'
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col gap-10">
      <SectionHeading title="Writing" eyebrow="Notes">
        Essays on craft, systems, and the subtle details that make digital experiences feel premium.
      </SectionHeading>
      <div className="grid gap-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/writing/${post.slug}`} className="rounded-2xl border border-border px-6 py-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-serif tracking-tightest">{post.meta.title}</h3>
                <p className="text-sm text-muted">{post.meta.summary}</p>
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted">{post.meta.date}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
