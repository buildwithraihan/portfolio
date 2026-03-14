import React from "react";
import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import ScrollProgress from "@/components/ui/scroll-progress";
import Link from "next/link";
import { ArrowLeft, CalendarDays, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import RevealAnimation from "@/components/reveal-animations";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  return {
    title: `${post.metadata.title} | Portfolio`,
    description: post.metadata.summary,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  return (
    <div className="min-h-screen relative font-sans">
      <ScrollProgress className="bg-gradient-to-r from-purple-500 to-pink-500" />
      <div className="container mx-auto px-4 py-24 max-w-3xl">
        <RevealAnimation>
          <Link
            href="/blogs"
            className="inline-flex items-center text-zinc-500 hover:text-purple-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blogs
          </Link>
        </RevealAnimation>

        <RevealAnimation delay={0.1}>
          <div className="mb-8">
            <div className="flex gap-2 mb-4 flex-wrap">
              {post.metadata.tags?.map((tag) => (
                <Badge key={tag} variant="outline" className="border-purple-500/30 text-purple-400">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
              {post.metadata.title}
            </h1>
            <div className="flex items-center gap-6 text-zinc-500 text-sm border-b border-zinc-800 pb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.metadata.author}
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                {post.metadata.publishedAt}
              </div>
            </div>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.2}>
          <article className="prose prose-invert max-w-none text-zinc-400 leading-relaxed whitespace-pre-wrap">
            {post.content}
          </article>
        </RevealAnimation>
      </div>
    </div>
  );
}
