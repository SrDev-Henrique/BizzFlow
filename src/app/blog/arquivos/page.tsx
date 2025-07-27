import { client, urlFor } from "@/lib/sanity";
import type { SanityPosts } from "@/types/sanityTypes";
import Image from "next/image";
import Wrapper from "../components/wrapper";
import Link from "next/link";

async function getData() {
  const query = `
    *[_type == 'post'] | order(_publishedAt desc) {
        title,
            description,
            estimatedTime,
            mainImage,
            "currentSlug": slug.current,
            "currentDate": _createdAt,
            categories[]->{
            _id,
                title,
            }
    }
    `;

  const data = await client.fetch(query);
  return data;
}

export default async function Archive() {
  const posts: SanityPosts[] = await getData();

  return (
    <Wrapper>
      <h1 className="text-4xl font-bold">Arquivos</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.currentSlug}
            href={`/blog/${post.currentSlug}`}
            className="hover:bg-muted-foreground/20 flex items-start gap-2 rounded-lg p-4"
          >
            <div className="relative aspect-square w-[150px] min-w-[150px]">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                className="rounded-lg object-cover object-center"
              />
            </div>
            <div className="flex max-w-2xl flex-col space-y-2">
              <h2 className="line-clamp-2 text-2xl font-bold hover:underline">
                {post.title}
              </h2>
              <p className="text-muted-foreground text-sm">
                {new Date(post.currentDate).toLocaleDateString()}
              </p>
              <p className="text-muted-foreground text-sm">
                {post.estimatedTime} de leitura
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Wrapper>
  );
}
