import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditPost() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  useEffect(() => {
    axios
      .get(`https://limitless-forest-49003.herokuapp.com/posts/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setContent(response.data.content);
      });
  }, []);
  return (
    <div className="container">
      <h3 className="my-2">Create New Post</h3>
      <form
        onSubmit={() => {
          axios.put(
            `https://limitless-forest-49003.herokuapp.com/posts/${id}`,
            {
              title,
              content,
            }
          );
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
            defaultValue={title}
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
            value={content}
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

export default EditPost;
