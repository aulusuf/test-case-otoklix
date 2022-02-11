import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

function PostDetail() {
  let navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [publishedDate, setPublishedDate] = useState();

  useEffect(() => {
    axios
      .get(`https://limitless-forest-49003.herokuapp.com/posts/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setContent(response.data.content);
        setPublishedDate(response.data.published_at);
      })
      .catch((err) => err.message);
  }, []);
  return (
    <div className="container">
      <h3 className="my-2">Create New Post</h3>

      <div className="mb-3">
        <label className="form-label">Title</label>
        <h4>{title}</h4>
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <p>{content}</p>
      </div>
      <div className="mb-3">
        <p>{moment(publishedDate).format("HH:mm DD-MM-YYYY")}</p>
      </div>
      <button
        type="button"
        className="btn btn-light mx-2"
        onClick={() => navigate("/")}
      >
        Back
      </button>
      <button
        type="button"
        className="btn btn-warning mx-2"
        onClick={() => navigate(`/posts/edit/${id}`)}
      >
        Edit
      </button>
    </div>
  );
}

export default PostDetail;
