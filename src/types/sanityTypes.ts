interface SanityCategory {
  _id: string;
  title: string;
}

interface SanityMarkDef {
  _type: "link";
  href: string;
}

interface SanitySpan {
  _type: "span";
  marks: SanityMarkDef[];
  text: string;
}

interface SanityBody {
  _type: "block";
  children: SanitySpan[];
  markDefs: SanityMarkDef[];
  style:
    | "normal"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "blockquote"
    | "code"
    | "pre"
    | "ul"
    | "ol"
    | "li"
    | "link";
}

export interface MainImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export type SanityPosts = {
  title: string;
  description: string;
  estimatedTime: string;
  currentSlug: string;
  mainImage: MainImage;
  currentDate: Date;
  categories: SanityCategory[];
};

export type SanityPost = {
  title: string;
  description: string;
  estimatedTime: string;
  currentSlug: string;
  mainImage: MainImage;
  currentDate: Date;
  categories: SanityCategory[];
  author: {
    name: string;
    image: MainImage;
  };
  body: SanityBody[];
};
