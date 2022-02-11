import React, { useEffect, useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPosts } from "../redux";
import axios from "axios";

function AllPosts({ postsData, fetchPosts }) {
  const [data, setData] = useState();
  const modal = (data) => {
    setData(data);
    console.log(data);
  };
  const deletePost = (e) => {
    e.preventDefault();
    // const id = e.target.id;
    console.log(data);
    axios.delete(`https://limitless-forest-49003.herokuapp.com/posts/${data}`);
    fetchPosts();
  };
  let navigate = useNavigate();
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const lihatDetail = (id) => {
    navigate(`/posts/` + id);
  };
  return (
    <>
      <div
        className="modal fade"
        id="confDelete"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-blue" id="">
                Confirmation
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <p>Are you sure want to delete this?</p>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                    onClick={(e) => deletePost(e)}
                  >
                    Delete
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="text-center my-3">Posts</h3>
        <button className="btn btn-primary" onClick={() => navigate("/create")}>
          Create Post
        </button>

        {postsData.loading ? (
          <div>Loading...</div>
        ) : postsData.error ? (
          <h2>{postsData.error}</h2>
        ) : (
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th className="col-5">Title</th>
                  <th className="col-3">Published</th>
                  <th className="col-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {postsData &&
                  postsData.posts &&
                  postsData.posts.map((post) => {
                    return (
                      <tr className="align-middle">
                        <td>{post.title}</td>
                        <td>
                          {moment(post.published_at).format("HH:mm DD-MM-YYYY")}
                        </td>
                        <td>
                          <div>
                            <button
                              className="btn btn-primary mx-1"
                              onClick={() => lihatDetail(post.id)}
                            >
                              Detail
                            </button>
                            <button
                              className="btn btn-danger mx-1"
                              data-bs-toggle="modal"
                              data-bs-target="#confDelete"
                              onClick={() => modal(post.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    postsData: state.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
