"use client";
import Giscus from "@giscus/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Giscus
        id="comments"
        repo="Yash-946/github-comments"
        repoId="R_kgDOQLRkYQ"
        category="Announcements"
        categoryId="DIC_kwDOQLRkYc4CxNJy"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
