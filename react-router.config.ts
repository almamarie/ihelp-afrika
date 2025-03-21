import type { Config } from "@react-router/dev/config";
import { DUMMY_ARTICLES } from "utils/articles";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  async prerender() {
    const slugs = DUMMY_ARTICLES.map((article) => article.slug);
    return slugs.map((slug) => `/blog/${slug}`);
  },
} satisfies Config;
