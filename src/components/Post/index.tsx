import React from "react";

import Image from "next/image";
import IconButton from "../IconButton";

export default function Post() {
  return (
    <article className="m-4 flex w-11/12 rounded bg-white outline outline-1 outline-themeGrey300 hover:outline-themeGrey500 sm:w-2/5">
      <div className="flex flex-col items-center rounded-l bg-themeGrey100 p-1">
        <IconButton>
          <Image
            src="/upvote.svg"
            width={100}
            height={100}
            priority={true}
            alt="Logo"
            className="h-5 w-5"
          />
        </IconButton>
        <p>123</p>
        <IconButton>
          <Image
            src="/downvote.svg"
            width={100}
            height={100}
            priority={true}
            alt="Logo"
            className="h-5 w-5"
          />
        </IconButton>
      </div>
      <div className="p-2">
        <div className="flex gap-3 text-sm">
          <p>r/society</p>
          <span>-</span>
          <p>user</p>
        </div>
        <h2 className="text-xl font-semibold">Post header</h2>
        <div></div>
        <div className="flex ">
          <IconButton>
            <Image
              src="/comment.svg"
              width={100}
              height={100}
              priority={true}
              alt="Logo"
              className="h-5 w-5"
            />
            <p>Comments</p>
          </IconButton>
          <IconButton>
            <Image
              src="/bookmark.svg"
              width={100}
              height={100}
              priority={true}
              alt="Logo"
              className="h-5 w-5"
            />
            <p>Save</p>
          </IconButton>
          <IconButton>
            <Image
              src="/share.svg"
              width={100}
              height={100}
              priority={true}
              alt="Logo"
              className="h-5 w-5"
            />
            <p>Share</p>
          </IconButton>
        </div>
      </div>
    </article>
  );
}
