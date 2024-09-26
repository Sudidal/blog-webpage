import classes from "./postCard.module.css";
import blogApi from "../../blogAPI.js";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext.jsx";
import PropTypes from "prop-types";

function PostCard({ post }) {
  const user = useContext(userContext);

  return (
    <div className={classes.postCard}>
      <Link to={"/posts/" + post.id} className="unstyled-link">
        <em>By: {post.author.username}</em>
        <em>{post.publishDate}</em>
        <p>{post.title}</p>
      </Link>
      <div className={classes.bottomSide}>
        <div className={classes.left}>{post.comments.length}</div>
        <div className={classes.right}>
          {blogApi.isAdmin(user) && (
            <div>
              <Link to={"/posts/edit/" + post.id} className="button-link">
                Edit
              </Link>
              <button
                onClick={() => {
                  blogApi.deletePost(post.id);
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.object,
};

export default PostCard;
