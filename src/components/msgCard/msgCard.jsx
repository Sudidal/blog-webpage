import PropTypes from "prop-types";
import classes from "./msgCard.module.css";

function MsgCard({ msg, onRemove }) {
  let content = "";

  if (typeof msg === "object") {
    if (msg.msg) {
      content = msg.msg;
    } else if (msg.message) {
      content = msg.mesasge;
    }
  } else if (typeof msg === "string") {
    content = msg;
  }

  return (
    <div className={classes.card}>
      <p>{content}</p>
      <button onClick={() => {onRemove(msg)}}>X</button>
    </div>
  );
}

MsgCard.propTypes = {
  msg: PropTypes.any,
  onRemove: PropTypes.func,
};

export default MsgCard;
