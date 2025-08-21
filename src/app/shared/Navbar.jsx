import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className="flex gap-5">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          {/* <li>
            <Link href={"/about"}>About</Link>
          </li> */}
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
