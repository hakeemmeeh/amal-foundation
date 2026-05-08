import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { posts } from "@/data/posts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.id}`,
    keywords: [post.tag, "Somalia impact story", "Amal Foundation blog"],
    image: post.image.startsWith("http") ? post.image : undefined,
  });
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
