import { useState } from 'react'
import './App.css'

function App() {

  const [posts, setPosts] = useState([{
    author: "Marco",
    title: "Boolean",
    body: "Questo è il mio post",
    pubblico: false

  }]);
  const [newPost, setNewPost] = useState({
    author: "",
    title: "",
    body: "",
    pubblico: false
  });
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
            <h3>{post["title"]}</h3>
            <p>{post["author"]}</p>
            <p>{post["body"]}</p>
            <input
              name="public"
              checked={post["pubblico"]}
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
          value={newPost.author}
          onChange={handleBlog}
          placeholder="Inserisci nome autore"
        />
        <input
          type="text"
          name="title"
          value={newPost.title}
          onChange={handleBlog}
          placeholder="Inserisci titolo del post"
        />
        <input
          type="text"
          name="body"
          value={newPost.body}
          onChange={handleBlog}
          placeholder="Inserisci contenuto del post"
        />
      </form>

    </>
  )
}

export default App
