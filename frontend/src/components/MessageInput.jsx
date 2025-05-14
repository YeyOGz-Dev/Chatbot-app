import React, { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={text}
        placeholder="Escribe tu mensaje..."
        onChange={(e) => setText(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Send
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ccc",
    backgroundColor: "#fafafa",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: 5,
    outline: "none",
    fontSize: "1rem",
  },
  button: {
    marginLeft: "10px",
    padding: "10px 15px",
    backgroundColor: "#0C9C5E",
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default MessageInput;
