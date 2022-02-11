import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  let navigate = useNavigate();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const now = new Date();
  return (
    <div className="container">
      <h3 className="my-2">Create New Post</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios.post(`https://limitless-forest-49003.herokuapp.com/posts`, {
            title,
            content,
            published_at: now,
          });
          navigate("/");
          window.location.reload();
        }}
      >
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            type="text"
            className="form-control"
            id="content"
            rows="3"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mx-2">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-light mx-2"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
