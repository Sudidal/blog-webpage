import classes from "./postCard.module.css"

import PropTypes from "prop-types";

function PostCard({ post }) {
  return (
    <div className={classes.postCard}>
      <p>{post.title}</p>
      <p>{post.author.username}</p>
      <p>{post.publishDate}</p>
      <p>{post.comments.length}</p>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.object,
};


export default PostCard;
