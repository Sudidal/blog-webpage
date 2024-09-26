import classes from "./postCard.module.css";
import blogApi from "../../blogAPI.js";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext.jsx";
import PropTypes from "prop-types";

function PostCard({ post }) {
  const user = useContext(userContext);

  return (
    <Link to={"/posts/" + post.id} className={classes.postCard}>
      <p>{post.title}</p>
      <p>{post.author.username}</p>
      <p>{post.publishDate}</p>
      <p>{post.comments.length}</p>
      {blogApi.isAdmin(user) && (
        <div>
          <Link to={"/posts/edit/" + post.id}>Edit</Link>
          <button
            onClick={() => {
              blogApi.deletePost(post.id);
            }}
          >
            Delete
          </button>
        </div>
      )}
    </Link>
  );
}

PostCard.propTypes = {
  post: PropTypes.object,
};

export default PostCard;
