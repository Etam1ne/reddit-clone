import Post from "@/components/Post";

export default function Home() {
  return (
    <div className="w-fit">
      <Post
        subreddit="ghoul"
        username="etamine"
        postHeader="What is the best emote and why xdd"
        imageLink="https://i.imgur.com/HgCZsOg.png"
        upvotes={993}
      />
    </div>
  );
}
