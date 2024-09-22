import PropTypes from "prop-types";
import PostCard from "../postCard/postCard.jsx";
import classes from "./postsList.module.css";

function PostsList({ posts }) {
  return (
    <div className={classes.postsList}>
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </div>
  );
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

export default PostsList;
