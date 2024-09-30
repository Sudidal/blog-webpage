import PropTypes from "prop-types";
import classes from "./messagesContainer.module.css";
import MsgsList from "../msgsList.jsx/msgsList.jsx";

function MessagesContainer({ messages, onMsgRemove }) {
  return (
    <div className={classes.messagesContainer}>
      <MsgsList msgs={messages} onMsgRemove={onMsgRemove} />
    </div>
  );
}

MessagesContainer.propTypes = {
  messages: PropTypes.array,
  onMsgRemove: PropTypes.func,
};

export default MessagesContainer;
