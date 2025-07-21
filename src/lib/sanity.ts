// lib/sanity.ts
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
	projectId: "vt7a04k0",
	dataset: "production",
	apiVersion: "2023-07-19",
	useCdn: true,
});
