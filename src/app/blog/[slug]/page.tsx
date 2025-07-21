// app/blog/[slug]/page.tsx
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: boring */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts, type Post } from "@/lib/posts";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((p: Post) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = allPosts.find((p: Post) => p.slug === slug);

  if (!post) return notFound();

  return (
    <article className="prose dark:prose-invert mx-auto max-w-3xl px-4 py-16">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
