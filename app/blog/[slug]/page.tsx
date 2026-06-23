import React from "react";
import { getPostBySlug, allPosts } from "../blogData";
import BlogDetailClient from "./BlogDetailClient";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Filter related posts (exclude current)
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return <BlogDetailClient post={post} relatedPosts={relatedPosts} />;
}
