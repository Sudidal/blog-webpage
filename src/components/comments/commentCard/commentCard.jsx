import classes from "./commentCard.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import CommentForm from "../commentForm/commentForm.jsx";
import IconButtonWithCount from "../../iconButtonWithCount/iconButtonWithCount.jsx";
import IconButton from "../../iconButton/iconButton.jsx";
import PrettyDate from "../../prettyDate/prettyDate.jsx";

function CommentCard({ comment, onLike, onEdit, onDelete }) {
  const [edit, setEdit] = useState(false);

  function startEdit() {
    setEdit(true);
  }
  function stopEdit() {
    setEdit(false);
  }

  return (
    <div className={classes.commentCard}>
      {edit ? (
        <>
          <CommentForm
            onSubmit={(content) => {
              stopEdit();
              onEdit(content, comment.id);
            }}
            values={{ content: comment.content }}
          />{" "}
          <button onClick={stopEdit}>X</button>
        </>
      ) : (
        <>
          <em>By: {comment.user.username}</em>
          <PrettyDate isoString={comment.publishDate} />
          <p>{comment.content}</p>
          <div className={classes.bottom}>
            <div className={classes.left}>
              <IconButtonWithCount
                iconSrc={"/heart.svg"}
                count={comment.likes}
                onClick={() => {
                  onLike(comment.id);
                }}
              />
            </div>
            <div className={classes.left}>
              {comment.deletableByUser && (
                <IconButton
                  iconSrc={"/delete.svg"}
                  onClick={() => {
                    onDelete(comment.id);
                  }}
                />
              )}
              {comment.editableByUser && (
                <IconButton
                  iconSrc={"/edit.svg"}
                  onClick={() => {
                    startEdit();
                  }}
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

CommentCard.propTypes = {
  comment: PropTypes.object,
  onLike: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default CommentCard;
