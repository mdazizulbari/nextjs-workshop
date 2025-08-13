import Link from "next/link";
import React from "react";
import Button from "./Button";

export default function page() {
  const blogs = [
    {
      id: 1,
      title: "This is title",
    },
    {
      id: 2,
      title: "This is title 2",
    },
    {
      id: 3,
      title: "This is title 3",
    },
  ];

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id} className="border">
          <h4 className="h-10">{blog.title}</h4>
          <Link href={`blog/${blog.id}`}>details</Link>
          <Button />
        </div>
      ))}
    </div>
  );
}
