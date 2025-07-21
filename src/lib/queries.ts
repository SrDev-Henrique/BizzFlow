export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  mainImage {
    asset-> {
      _id,
      url
    }
  },
  "author": author->name,
  body,
  categories[]-> {
    title
  }
}`;
