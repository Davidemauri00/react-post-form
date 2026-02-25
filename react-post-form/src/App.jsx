import { useState } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState({
    author: "",
    title: "",
    body: "",
    public: false

  });
  const [newPost, setNewPost] = useState([]);
  function handleBlog(blog) {
    setPosts({
      ...posts,
      [blog.target.name]: blog.target.value
    });
  }

  return (
    <>
      <ul>

      </ul>
      <form>
        <input
          type="text"
          name="author"
          value={posts.author}
          onChange={handleBlog}
          placeholder="Inserisci nome autore"
        />
        <input
          type="text"
          name="title"
          value={posts.title}
          onChange={handleBlog}
          placeholder="Inserisci titolo del post"
        />
        <input
          type="text"
          name="body"
          value={posts.body}
          onChange={handleBlog}
          placeholder="Inserisci contenuto del post"
        />
      </form>

    </>
  )
}

export default App
