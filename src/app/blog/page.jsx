import Link from "next/link";
import React from "react";
import Button from "./Button";

export default async function blogPage() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  console.log(posts);

  // const blogs = [
  //   {
  //     id: 1,
  //     title: "This is title",
  //   },
  //   {
  //     id: 2,
  //     title: "This is title 2",
  //   },
  //   {
  //     id: 3,
  //     title: "This is title 3",
  //   },
  // ];

  return (
    <div className="">
      <h2>This is Blog Page</h2>
      {posts.map((post) => (
        <div key={post.id}></div>
      ))}
    </div>
    // <div>
    //   {blogs.map((blog) => (
    //     <div key={blog.id} className="border">
    //       <h4 className="h-10">{blog.title}</h4>
    //       <Link href={`blog/${blog.id}`}>details</Link>
    //       <Button />
    //     </div>
    //   ))}
    // </div>
  );
}
