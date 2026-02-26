import { useState } from 'react'
import './App.css'

function App() {

  const [posts, setPosts] = useState([{
    author: "Marco",
    title: "Boolean",
    body: "Questo è il mio post",
    visibile: true

  }]);
  const [newPost, setNewPost] = useState({
    author: "",
    title: "",
    body: "",
    visibile: true
  });
  function submitBlog(event){
    event.preventDefault();
    const aggiornatoBlog = [...posts, newPost];
    setPosts(aggiornatoBlog);
    setNewPost({
    author: "",
    title: "",
    body: "",
    visibile: true});
  }
  function handleBlog(blog) {
    const valore =
      blog.target.type === "checkbox" ?
        blog.target.checked : blog.target.value;
    setNewPost({
      ...newPost,
      [blog.target.name]: valore,
    });
  }

  return (
    <>
      <div>
        {posts.map((post, index) => 
          <div key={index}>
            <h3>{post["title"]}</h3>
            <p>{post["author"]}</p>
            <p>{post["body"]}</p>
            <p>{post["visibile"] === true ? "pubblico" : "privato"}</p>
          </div>
        )}
      </div>
      <form onSubmit={submitBlog}>
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
        <input
              name="visibile"
              checked={newPost.visibile}
              id="available"
              onChange={handleBlog}
              type="checkbox"
            />
        <button type="submit">
          Pubblica
        </button>
      </form>

    </>
  )
}

export default App
