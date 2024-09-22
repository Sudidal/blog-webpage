import PropTypes from "prop-types";
import PostCard from "./postCard.jsx";

function PostsList({ posts }) {
  return (
    <div>
      {posts.map((post) => {
        return (
        <PostCard key={post.key} post={post}/>
      )
      })}
    </div>
  );
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
}

export default PostsList;
