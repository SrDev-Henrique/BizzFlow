"use client";

import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import type { SanityPosts } from "@/types/sanityTypes";
import { useEffect, useMemo, useState } from "react";
import { SearchIcon, XIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "@/context/GlobalContext";
import { Button } from "@/components/ui/button";

const blogsFilterSchema = z.object({
  search: z.string().optional(),
});

type BlogsFilterType = z.infer<typeof blogsFilterSchema>;

export default function FilterPosts({ posts }: { posts: SanityPosts[] }) {
  const [currentFilter, setCurrentFilter] = useState("");

  const { isFilterOpen, setIsFilterOpen } = useGlobalContext();

  const { register, watch, setValue } = useForm<BlogsFilterType>({
    resolver: zodResolver(blogsFilterSchema),
    defaultValues: {
      search: currentFilter,
    },
  });

  useEffect(() => {
    setValue("search", currentFilter);
  }, [currentFilter, setValue]);

  const searchValue = watch("search");

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

  const handleCloseFilter = () => {
    setIsFilterOpen(false);
  };

  return (
    isFilterOpen && (
      <div className="flex-center size-full pointer-events-auto">
        <div className="bg-primary-foreground flex h-[80%] w-[96%] max-w-[700px] flex-col gap-4 overflow-y-auto rounded-lg p-6 shadow-lg">
          <div className="flex w-full justify-end">
            <Button
              variant="ghost"
              className="flex h-10 w-10 items-center justify-center"
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <div
                key={post.currentSlug}
                className="flex flex-col items-center gap-2"
              >
                <Image
                  src={urlFor(post.mainImage).url() || ""}
                  alt={post.title}
                  width={300}
                  height={200}
                />
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-bold">{post.title}</h2>
                  <p className="text-muted-foreground text-sm">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-muted-foreground text-sm">
                      {post.estimatedTime}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {new Date(post.currentDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
