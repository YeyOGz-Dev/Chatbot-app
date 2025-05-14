import React, { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  return (
    <form style={styles.container} onSubmit={handleSubmit}>
      <input
        type="text"
        style={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe un mensaje..."
      />
      <button style={styles.button} type="submit">
        Send
      </button>
    </form>
  );
};

const styles = {
  container: {
    display: "flex",
    padding: 10,
    borderTop: "1px solid #ccc",
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 7,
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    marginLeft: 10,
    padding: "0 20px",
    borderRadius: 7,
    backgroundColor: "#0C9C5E",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default MessageInput;
