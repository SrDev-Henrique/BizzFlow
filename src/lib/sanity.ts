// lib/sanity.ts
import type { MainImage } from "@/types/sanityTypes";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "vt7a04k0",
  dataset: "production",
  apiVersion: "2023-07-19",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: MainImage) => builder.image(source);
