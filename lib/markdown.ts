import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';

const writingDirectory = path.join(process.cwd(), 'content', 'writing');

export type WritingMeta = {
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

export type WritingPost = {
  slug: string;
  meta: WritingMeta;
  content: string;
};

export function getWritingSlugs(): string[] {
  return fs
    .readdirSync(writingDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

export function getAllPosts(): WritingPost[] {
  return getWritingSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
}

export function getPostBySlug(slug: string): WritingPost {
  const fullPath = path.join(writingDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const meta: WritingMeta = {
    title: String(data.title ?? ''),
    date: String(data.date ?? ''),
    summary: String(data.summary ?? ''),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : []
  };

  return { slug, meta, content };
}

export async function renderMarkdown(markdown: string) {
  const result = await remark().use(remarkGfm).use(html).process(markdown);
  return result.toString();
}
