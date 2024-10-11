import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import classes from "./msgCard.module.css";

function MsgCard({ msg, onRemove }) {
  const msgEle = useRef();

  const removeDurationMs = 6000;
  const animationDurationMs = 4000;

  useEffect(() => {
    const removeId = setTimeout(() => {
      onRemove(msg);
    }, removeDurationMs);

    setTimeout(() => {
      msgEle.current.addEventListener("animationend", () => {
        msgEle.current.style.display = "none"
      })
      msgEle.current.style = "animation: fade 1s forwards"
    }, animationDurationMs);

    return () => {
      clearTimeout(removeId);
    };
  }, [msg, onRemove]);

  return (
    <div className={classes.card} ref={msgEle}>
      <p>{msg.text}</p>
      <button
        onClick={() => {
          onRemove(msg);
        }}
      >
        X
      </button>
    </div>
  );
}

MsgCard.propTypes = {
  msg: PropTypes.object,
  onRemove: PropTypes.func,
};

export default MsgCard;
