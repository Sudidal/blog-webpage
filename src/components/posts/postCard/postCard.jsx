import classes from "./postCard.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import IconWithCount from "../../iconWithCount/iconWithCount.jsx";
import IconButton from "../../iconButton/iconButton.jsx";
import PrettyDate from "../../prettyDate/prettyDate.jsx";

function PostCard({ post, onDelete }) {
  const navigate = useNavigate();

  return (
    <div
      className={`${classes.postCard} clickable`}
      onClick={() => {
        navigate("/posts/" + post.id);
      }}
    >
      <div className={classes.top}>
        <em>By: {post.author.username}</em>
        <em>
          <PrettyDate isoString={post.publishDate}></PrettyDate>
        </em>
      </div>
      <p>{post.title}</p>
      <div className={classes.bottom}>
        <div className={classes.left}>
          <IconWithCount
            iconSrc={"/comment.svg"}
            count={post.comments.length}
          />
          <IconWithCount iconSrc={"/heart.svg"} count={post.likes} />
        </div>
        <div className={classes.right}>
          {post.editableByUser && (
            <IconButton
              iconSrc="/edit.svg"
              onClick={() => {
                navigate("/posts/edit/" + post.id);
              }}
            />
          )}
          {post.deletableByUser && (
            <IconButton
              iconSrc="/delete.svg"
              onClick={() => {
                onDelete(post.id);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.object,
  onDelete: PropTypes.func,
};

export default PostCard;
