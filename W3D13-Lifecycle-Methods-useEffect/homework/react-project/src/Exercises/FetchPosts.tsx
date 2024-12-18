import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function FetchPosts() {
  const [id, setId] = useState<number>(1);
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const fetchData = (id: number): void => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Post not found");
      })
      .then((data) => setPost(data))
      .catch((err) => {
        console.log("Error: ", err.message);
      });
  };

  return (
    <div>
      <button onClick={() => setId(id + 1)}>Next</button>
      {post && (
        <div>
          <p>ID: {post.id}</p>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
        </div>
      )}
    </div>
  );
}
