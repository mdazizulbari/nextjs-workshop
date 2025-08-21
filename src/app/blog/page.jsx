import React from "react";
import BlogCard from "../components/BlogCard";

export default async function BlogPage() {
  const res = await fetch("https://api.vercel.app/blog", {
    cache: "no-store", // always fetch fresh
  });
  const posts = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">📝 Blog Page</h2>

      <div className="space-y-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
