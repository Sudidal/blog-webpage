import classes from "./postCard.module.css";
import blogApi from "../../blogAPI.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext.jsx";
import IconWithCount from "../iconWithCount/iconWithCount.jsx";
import IconButton from "../iconButton/iconButton.jsx";
import ClickableArea from "../clickableArea/clickableArea.jsx";
import PropTypes from "prop-types";

function PostCard({ post }) {
  const user = useContext(userContext);
  const navigate = useNavigate()

  return (
    <div className={classes.postCard}>
    <ClickableArea onClick={() => {navigate("/posts/" + post.id)}}>
        <em>By: {post.author.username}</em>
        <em>{post.publishDate}</em>
        <p>{post.title}</p>
      <div className={classes.bottomSide}>
        <div className={classes.left}>
          <IconWithCount
            iconSrc={"/comment.svg"}
            count={post.comments.length}
          />
          <IconWithCount iconSrc={"/heart.svg"} count={post.likes} />
        </div>
        <div className={classes.right}>
          {blogApi.isAdmin(user) && (
            <>
              <IconButton
                iconSrc="/edit.svg"
                onClick={() => {
                  navigate("/posts/edit/" + post.id);
                }}
              />
              <IconButton
                iconSrc="/delete.svg"
                onClick={() => {
                  blogApi.deletePost(post.id);
                }}
              />
            </>
          )}
        </div>
      </div>
    </ClickableArea>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.object,
};

export default PostCard;
