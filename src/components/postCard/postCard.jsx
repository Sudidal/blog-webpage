import classes from "./postCard.module.css"
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

function PostCard({ post }) {
  return (
    <Link to={"/posts/" + post.id} className={classes.postCard}>
      <p>{post.title}</p>
      <p>{post.author.username}</p>
      <p>{post.publishDate}</p>
      <p>{post.comments.length}</p>
    </Link>
  );
}

PostCard.propTypes = {
  post: PropTypes.object,
};


export default PostCard;
