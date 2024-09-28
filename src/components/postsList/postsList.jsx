import blogApi from "../../blogAPI.js";
import PropTypes from "prop-types";
import PostCard from "../postCard/postCard.jsx";
import classes from "./postsList.module.css";

function PostsList({ posts, onPostDelete }) {
  function deletePost(postId) {
    blogApi.deletePost(postId).then(res => {
      if(res === true) {
        onPostDelete()
      }
    })
  }
  
  return (
    <div className={classes.postsList}>
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} onDelete={deletePost} />;
      })}
    </div>
  );
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  onPostDelete: PropTypes.func,
};

export default PostsList;
