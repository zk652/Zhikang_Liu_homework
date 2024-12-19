import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function FetchPractice() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      {posts &&
        posts
          .filter((post) => post.title.split(" ").length > 5)
          .map((post) => {
            return (
              <div key={post.id}>
                <p>ID: {post.id}</p>
                <p>Title: {post.title}</p>
                <p>Body: {post.body}</p>
              </div>
            );
          })}
    </div>
  );
}
