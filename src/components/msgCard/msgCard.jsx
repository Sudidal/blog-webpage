import PropTypes from "prop-types";
import { useEffect } from "react";
import classes from "./msgCard.module.css";

function MsgCard({ msg, onRemove }) {
  const durationMs = 5000;

  useEffect(() => {
    const id = setTimeout(() => {
      onRemove(msg);
    }, durationMs);
    return () => {
      clearTimeout(id);
    };
  }, [msg, onRemove]);

  return (
    <div className={classes.card}>
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
