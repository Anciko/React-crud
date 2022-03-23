import { useEffect, useState } from "react";
import AddPost from "./components/AddPost";
import Post from "./components/Post";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostDetail from "./components/PostDetail";
import EditPost from "./components/EditPost";

function App() {
  const END_POINT = "http://localhost:9000/posts";
  let [posts, setPosts] = useState([]);

  let addNewPost = async (post) => {
    await fetch(END_POINT, {
      method: "POST",
      body: JSON.stringify({
        title: post.title,
        desc: post.desc
      }),
      headers: {
        "content-type": "application/json"
      }
    })
    setPosts([post, ...posts]);
    console.log("New post is", post);
  }

  useEffect(async () => {
    let posts = await (await fetch(END_POINT)).json();
    // let response = await fetch(END_POINT);
    // let data = await response.json();
    setPosts(posts);
  }, []);

  // useEffect(() => {
  //   let data = localStorage.getItem('DB_NAME'); 
  //   if(data) setPosts(JSON.parse(data));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("DB_NAME", JSON.stringify(posts));
  // }, [posts])

 

  const postDeleteHandler = async (id) => {
    await fetch(END_POINT + "/" + id, {
      method : "DELETE"
    });
    setPosts(posts.filter(post => post.id !== id));
  }

  const postUpdateHandler = async (post) => {
    await fetch(END_POINT + "/" + post.id, {
      method : "PATCH",
      body: JSON.stringify(post),
      headers : {
        "content-type" : "application/json"
      }
    });
    setPosts(posts.map(po => po.id === post.id ? post : po ));
  }

  return (
    <div className="container my-2">
      <Router>
        <Routes>
          <Route path="/" element={<Post posts={posts} deletePost={postDeleteHandler} />} > </Route>
          <Route path="/add" element={<AddPost addPost={addNewPost} />} ></Route>
          <Route path="/post/:id" element={<PostDetail />}></Route>
          <Route path="/post/edit/:id" element={<EditPost updatePost={postUpdateHandler} />}></Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App;
