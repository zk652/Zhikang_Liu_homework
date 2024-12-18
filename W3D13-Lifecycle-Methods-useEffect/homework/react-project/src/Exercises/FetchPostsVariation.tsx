import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export default function FetchPostsVariation() {
  const [id, setId] = useState<number>(1);
  const [post, setPost] = useState<Post>();
  const [intervalFunc, setIntervalFunc] = useState<number | null>(null);

  useEffect(() => {
    const fetchInterval = setInterval(() => {
      fetchData(id);
    }, 10000);

    setIntervalFunc(fetchInterval);

    return () => clearInterval(fetchInterval);
  }, [id]);

  const fetchData = (id: number): void => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Post not found");
      })
      .then((data) => {
        setPost(data);
        setId(id + 1);
      })
      .catch((err) => {
        console.log("Error fetching: ", err.message);
        if (intervalFunc !== null) clearInterval(intervalFunc);
      });
  };

  return (
    <div>
      {post ? (
        <div>
          <p>ID: {post.id}</p>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
        </div>
      ) : (
        <p>Post not found or loading...</p>
      )}
    </div>
  );
}
