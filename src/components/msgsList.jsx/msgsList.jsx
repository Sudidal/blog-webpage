import PropTypes from "prop-types";
import MsgCard from "../msgCard/msgCard.jsx";
import classes from "./msgsList.module.css";

function MsgsList({ msgs, onMsgRemove }) {
  return (
    <div className={classes.list}>
      {msgs.map((msg) => {
        if(msg)
        return <MsgCard msg={msg} key={msg.id} onRemove={onMsgRemove}  />;
      })}
    </div>
  );
}

MsgsList.propTypes = {
  msgs: PropTypes.array,
  onMsgRemove: PropTypes.func
}

export default MsgsList;
