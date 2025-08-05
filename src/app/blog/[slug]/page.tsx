// app/blog/[slug]/page.tsx
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: boring */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client, urlFor } from "@/lib/sanity";
import type { SanityPost } from "@/types/sanityTypes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

async function getData(slug: string) {
  const query = `
    *[_type == 'post' && slug.current == '${slug}'] {
        title,
            description,
            estimatedTime,
            mainImage,
            "currentSlug": slug.current,
            "currentDate": _createdAt,
            categories[]->{
            _id,
                title,
            },
            author->{
                name,
                image
            },
            body
    }[0]
    `;

  const data = await client.fetch(query);
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getData(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post: SanityPost = await getData(slug);
  if (!post) return notFound();

  return (
    <div className="container mx-auto mt-32 flex w-[96%] max-w-7xl items-center justify-center pb-16">
      <div className="bg-primary-foreground flex w-full flex-col items-center justify-center space-y-4 rounded-lg px-4 py-16">
        <div className="flex max-w-4xl flex-col space-y-6">
          <div className="flex w-full flex-col space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {post.title}
            </h1>
            <div className="flex w-full flex-col items-start justify-between gap-2 sm:flex-row sm:items-center sm:gap-0">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={urlFor(post.author.image).url()} />
                    <AvatarFallback>
                      {post.author.name
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-muted-foreground text-sm">
                    {post.author.name}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                {new Date(post.currentDate).toLocaleDateString()} |{" "}
                {post.estimatedTime} de leitura
              </p>
            </div>
          </div>
          <div className="relative aspect-video h-auto w-full">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              priority
              className="rounded-lg object-cover object-center"
            />
          </div>
        </div>
        <article className="prose dark:prose-invert prose-li:marker:text-yellow prose-a:text-cian lg:prose-xl mt-10 max-w-4xl">
          <PortableText value={post.body} />
        </article>
      </div>
    </div>
  );
}
