import React from "react";

import Image from "next/image";
import IconButton from "../IconButton";

export default function Post({
  subreddit,
  username,
  postHeader,
  imageLink,
  upvotes,
}: {
  subreddit: string;
  username: string;
  postHeader: string;
  imageLink: string;
  upvotes: number;
}) {
  return (
    <article className="m-4 flex w-[90vw] rounded bg-white outline outline-1 outline-themeGrey300 hover:outline-themeGrey500 md:w-[40vw]">
      <div className="flex flex-col items-center rounded-l bg-themeGrey100 p-1">
        <IconButton>
          <Image
            src="/upvote.svg"
            width={100}
            height={100}
            priority={false}
            alt="Upvote"
            className="h-5 w-5"
          />
        </IconButton>
        <p>{upvotes}</p>
        <IconButton>
          <Image
            src="/downvote.svg"
            width={100}
            height={100}
            priority={false}
            alt="Downvote"
            className="h-5 w-5"
          />
        </IconButton>
      </div>

      <div className="p-2">
        <div className="flex gap-3 text-sm">
          <p>r/{subreddit}</p>
          <span>-</span>
          <p>u/{username}</p>
        </div>

        <h2 className="text-xl font-semibold">{postHeader}</h2>
        <div className="my-2">
          <Image
            src={imageLink}
            width={100}
            height={100}
            priority={false}
            alt="Generated photo"
            className="h-full w-full"
          />
        </div>

        <div className="flex">
          <IconButton>
            <Image
              src="/comment.svg"
              width={100}
              height={100}
              priority={false}
              alt="Comments"
              className="h-5 w-5"
            />
            <p>Comments</p>
          </IconButton>
          <IconButton>
            <Image
              src="/bookmark.svg"
              width={100}
              height={100}
              priority={false}
              alt="Favourites"
              className="h-5 w-5"
            />
            <p>Save</p>
          </IconButton>
          <IconButton>
            <Image
              src="/share.svg"
              width={100}
              height={100}
              priority={false}
              alt="Share"
              className="h-5 w-5"
            />
            <p>Share</p>
          </IconButton>
        </div>
      </div>
    </article>
  );
}
