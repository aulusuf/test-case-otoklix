import React from "react";
import { Routes, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import CreatePost from "./components/CreatePost";
import PostDetail from "./components/PostDetail";
import EditPost from "./components/EditPost";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllPosts />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/posts/:id" element={<PostDetail />} />
      <Route path="/posts/edit/:id" element={<EditPost />} />
    </Routes>
  );
}

export default App;
