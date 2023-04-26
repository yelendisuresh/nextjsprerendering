import Link from "next/link";
import React from "react";

function Home() {
  return (
    <div>
      <h1>Nextjs pre rendering</h1>
      <Link href="/users">users</Link>
      <Link href="/posts">posts</Link>
    </div>
  );
}

export default Home;
