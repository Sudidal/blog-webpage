import PropTypes from "prop-types";
import MsgCard from "../msgCard/msgCard.jsx";
import classes from "./msgsList.module.css";

function MsgsList({ msgs, onMsgRemove }) {
  let count = 0;
  return (
    <div className={classes.list}>
      {msgs.map((msg) => {
        return <MsgCard msg={msg} key={count++} onRemove={onMsgRemove}  />;
      })}
    </div>
  );
}

MsgsList.propTypes = {
  msgs: PropTypes.array,
  onMsgRemove: PropTypes.func
}

export default MsgsList;
