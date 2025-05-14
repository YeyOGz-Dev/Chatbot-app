import React from "react";
import { FaRobot } from "react-icons/fa6";

const Message = ({ sender, content }) => {
  const isUser = sender === "user";

  const styles = {
    container: {
      display: "flex",
      justifyContent: isUser ? "flex-end" : "flex-start",
      marginBottom: 10,
    },
    bubble: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 15px",
      borderRadius: 7,
      background: isUser ? "#0C9C5E" : "#f1f1f1",
      color: isUser ? "white" : "black",
      maxWidth: "80%",
    },
    botIcon: {
      fontSize: "2rem",
      color: "#0C9C5E",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.bubble}>
        {!isUser && <FaRobot style={styles.botIcon} />}
        {content}
      </div>
    </div>
  );
};

export default Message;
