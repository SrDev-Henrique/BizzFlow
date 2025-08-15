"use client";

import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import type { SanityPosts } from "@/types/sanityTypes";
import { useEffect, useMemo, useRef, useState } from "react";
import { SearchIcon, XIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "@/context/GlobalContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const blogsFilterSchema = z.object({
  search: z.string().optional(),
});

type BlogsFilterType = z.infer<typeof blogsFilterSchema>;

export default function FilterPosts({ posts }: { posts: SanityPosts[] }) {
  const [currentFilter, setCurrentFilter] = useState("");

  const filterPostsContainerRef = useRef<HTMLDivElement | null>(null);

  const { isFilterOpen, setIsFilterOpen } = useGlobalContext();

  const { register, watch, setValue } = useForm<BlogsFilterType>({
    resolver: zodResolver(blogsFilterSchema),
    defaultValues: {
      search: currentFilter,
    },
  });

  const searchValue = watch("search");

  const handleCloseFilter = () => {
    setIsFilterOpen(false);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setCurrentFilter(searchValue || "");
    }, 300);

    return () => clearTimeout(delay);
  }, [searchValue]);

  const filteredPosts: SanityPosts[] = useMemo(() => {
    if (currentFilter === "") return posts;

    return posts.filter((post) =>
      post.title.toLowerCase().includes(currentFilter.toLowerCase()),
    );
  }, [posts, currentFilter]);

  useEffect(() => {
    setValue("search", currentFilter);
  }, [currentFilter, setValue]);

  useEffect(() => {
    const filterPostsContainer = filterPostsContainerRef.current;
    if (!filterPostsContainer) return;

    const handleWheel = (e: Event) => {
      const wheelEvent = e as WheelEvent;
      if (filterPostsContainer.scrollHeight > filterPostsContainer.clientHeight) {
        wheelEvent.stopPropagation();
      }
    };

    filterPostsContainer.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      filterPostsContainer.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    isFilterOpen && (
      <div className="bg-accent-foreground/50 flex-center pointer-events-auto size-full">
        <div className="bg-primary-foreground flex h-[80%] w-[96%] max-w-[700px] flex-col gap-6 overflow-hidden rounded-lg p-6 shadow-lg">
          <div className="flex flex-col gap-4">
            <div className="flex w-full justify-end">
              <Button
                variant="destructive"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
                onClick={handleCloseFilter}
              >
                <XIcon size={24} />
              </Button>
            </div>
            <div className="flex w-full items-center gap-2">
              <SearchIcon size={16} />
              <Input
                type="text"
                placeholder="Buscar artigo..."
                {...register("search")}
                className="text-[18px]"
              />
            </div>
          </div>
          <div
            ref={filterPostsContainerRef}
            className="bg-accent my-scroll grid h-full grid-cols-1 gap-5 overflow-y-auto p-2"
          >
            {filteredPosts.map((post) => (
              <Link
                href={`/blog/${post.currentSlug}`}
                key={post.currentSlug}
                className="group"
              >
                <div className="flex h-28 items-center gap-2 overflow-hidden md:h-32">
                  <div className="relative h-full w-48 overflow-hidden md:w-56">
                    <Image
                      src={urlFor(post.mainImage).url() || ""}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex h-full w-full flex-col gap-2">
                    <h2 className="line-clamp-2 font-bold group-hover:underline md:text-base">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-2 text-xs md:text-sm">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-muted-foreground text-xs md:text-sm">
                        {post.estimatedTime}
                      </p>
                      <p className="text-muted-foreground text-xs md:text-sm">
                        {new Date(post.currentDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
