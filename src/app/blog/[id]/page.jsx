import React from "react";
import Link from "next/link";
// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await fetch("https://api.vercel.app/blog").then((res) =>
    res.json()
  );
  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function BlogDetailsPage({ params }) {
  const { id } = await params;

  const res = await fetch(`https://api.vercel.app/blog/${id}`, {
    // cache: "no-store",
  });
  const blog = await res.json();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center px-4 py-10">
      <article className="max-w-[61.8%] bg-white rounded-2xl shadow-lg p-10 leading-relaxed">
        {/* Back to blogs */}
        <Link
          href="/blog"
          className="inline-block mb-6 text-sm font-medium text-emerald-700 hover:text-emerald-900 transition"
        >
          ← Back to Blogs
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{blog.title}</h1>

        {/* Meta info */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-8 border-b border-gray-200 pb-4">
          <span>✍️ {blog.author}</span>
          <span>📅 {new Date(blog.date).toLocaleDateString()}</span>
          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs">
            {blog.category}
          </span>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>{blog.content}</p>
        </div>
      </article>
    </main>
  );
}
