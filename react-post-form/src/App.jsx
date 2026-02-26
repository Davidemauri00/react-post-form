import { useState } from 'react'
import './App.css'

function App() {

  const [posts, setPosts] = useState([{
    author: "Marco",
    title: "Boolean",
    body: "Questo è il mio post",
    public: false

  }]);
  const [listPost, setListPost] = useState([]);
  function handleBlog(blog) {
    setPosts({
      ...posts,
      [blog.target.name]: blog.target.value
    });
  }

  return (
    <>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.author}</p>
            <p>{post.body}</p>
            <input
              name="public"
              checked={posts.public}
              onChange={handleBlog}
              id="available"
              type="checkbox"
            />
          </div>
        ))}
      </div>
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
