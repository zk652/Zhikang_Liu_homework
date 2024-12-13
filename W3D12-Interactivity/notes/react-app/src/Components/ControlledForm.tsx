import { useState } from "react";

export default function ControlledForm() {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [author, setAuthor] = useState<string>("mario");

  interface Blog {
    title: string;
    body: string;
    author: string;
  }

  const [blogs, setBlogs] = useState<Blog[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBlogs([...blogs, { title, body, author }]);
    setTitle("");
    setBody("");
    setAuthor("mario");
  };

  return (
    <div>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button type="submit">Add Blog</button>
      </form>

      {blogs.length !== 0 && (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => {
              return (
                <tr key={blog.title}>
                  <td>{blog.title}</td>
                  <td>{blog.body}</td>
                  <td>{blog.author}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
