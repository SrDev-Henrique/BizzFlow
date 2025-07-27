// app/blog/page.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { client, urlFor } from "@/lib/sanity";
import type { SanityPosts } from "@/types/sanityTypes";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `
    *[_type == 'post'] | order(_publishedAt desc) {
        title,
            description,
            estimatedTime,
            mainImage,
            "currentSlug": slug.current,
            "currentDate": _publishedAt,
            categories[]->{
            _id,
                title,
            }
    }
    `;

  const data = await client.fetch(query);
  return data;
}

export default async function MainPosts() {
  const posts: SanityPosts[] = await getData();

  return (
    <div className="flex w-full flex-col px-4">
      <div className="mb-8 flex flex-col space-y-4">
        <h1 className="text-4xl font-bold">Blog da BizzFlow</h1>
        <p className="text-muted-foreground text-lg">
          Dicas, novidades e insights sobre gestão, RH e produtividade.
        </p>
      </div>

      <Link href={`/blog/${posts[0].currentSlug}`}>
        <Card className="cursor-pointer transition hover:shadow-md">
          <CardHeader>
            <Badge>{posts[0].categories[0].title}</Badge>
            <CardTitle>
              <h2 className="text-xl font-semibold hover:underline">
                {posts[0].title}
              </h2>
            </CardTitle>
            <CardDescription>
              <p>
                {new Date(posts[0].currentDate).toLocaleDateString()} |{" "}
                {posts[0].estimatedTime}
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{posts[0].description}</p>
            <div className="mt-4 h-full w-full">
              <Image
                src={urlFor(posts[0].mainImage).url()}
                alt="Blog 1"
                width={2000}
                height={2000}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <Button className="mt-4 w-full cursor-pointer">
              <p>Leia mais</p>
            </Button>
          </CardContent>
        </Card>
      </Link>

      <div className="mt-10 grid grid-rows-4 gap-6 md:grid-cols-2 md:grid-rows-2">
        {posts.slice(1).map((post) => (
          <Link key={post.currentSlug} href={`/blog/${post.currentSlug}`}>
            <Card className="cursor-pointer transition hover:shadow-md">
              <CardHeader>
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <Badge key={category._id}>{category.title}</Badge>
                  ))}
                </div>
                <CardTitle>
                  <h2 className="line-clamp-2 text-xl font-semibold hover:underline">
                    {post.title}
                  </h2>
                </CardTitle>
                <CardDescription>
                  <p>
                    {new Date(post.currentDate).toDateString()} |{" "}
                    {post.estimatedTime}
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">{post.description}</p>
                <div className="mt-4 h-full max-h-[225.6px] w-full max-w-[338.4px] overflow-hidden rounded-md">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt="Blog 1"
                    width={2000}
                    height={2000}
                    className="h-full w-full object-cover"
                  />
                </div>
                <Button className="mt-4 w-full cursor-pointer">
                  <p>Leia mais</p>
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
