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
  function handleBlog (blog){
    setPosts({
      ...posts,
      [blog.target.name]: blog.target.value
    });
  }

  return (
    <>
      <ul>
        
      </>

    </>
  )
}

export default App
