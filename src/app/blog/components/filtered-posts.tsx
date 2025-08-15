import { client } from "@/lib/sanity";
import type { SanityPosts } from "@/types/sanityTypes";
import FilterPosts from "./filter-posts/filter-posts";

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

export default async function FilteredPosts() {
  const posts: SanityPosts[] = await getData();

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <FilterPosts posts={posts} />
    </div>
  );
}
