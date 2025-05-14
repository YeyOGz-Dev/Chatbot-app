import React, { useState } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      content: "Buenos días soy Pocki ¿Cómo puedo ayudarte hoy?",
    },
  ]);

  const handleSend = async (text) => {
    // Agregar mensaje del usuario
    const userMessage = { sender: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);

    // Petición al backend
    const res = await fetch("http://localhost:3001/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: text, sender: "user" }),
    });

    const data = await res.json();

    // Agregar mensaje del bot
    if (data.aiResponse) {
      const botMessage = { sender: "bot", content: data.aiResponse };
      setMessages((prev) => [...prev, botMessage]);
    }
  };

  return (
    <div style={styles.chatBox}>
      <div style={styles.header}>💬 Chat With Pocki</div>
      <div style={styles.messages}>
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} content={msg.content} />
        ))}
      </div>
      <MessageInput onSend={handleSend} />
    </div>
  );
};

const styles = {
  chatBox: {
    width: 400,
    height: 600,
    border: "1px solid #ccc",
    borderRadius: 7,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    background: "#fff",
  },
  header: {
    backgroundColor: "#0C9C5E",
    color: "white",
    padding: "10px",
    fontWeight: "bold",
    textAlign: "center",
  },
  messages: {
    flex: 1,
    padding: 10,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};

export default ChatWindow;
