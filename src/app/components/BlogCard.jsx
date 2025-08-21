import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      {/* Title */}
      <h3 className="text-xl font-semibold">{post.title}</h3>

      {/* Meta info */}
      <p className="text-sm text-gray-500">
        By <span className="font-medium">{post.author}</span> |{" "}
        {new Date(post.date).toDateString()} |{" "}
        <span className="italic">{post.category}</span>
      </p>

      {/* Content preview */}
      <p className="mt-2 text-gray-700 line-clamp-3">
        {post.content}
      </p>

      {/* Actions */}
      <div className="mt-3 flex items-center gap-3">
        <Link
          href={`/blog/${post.id}`}
          className="text-blue-600 hover:underline"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}
