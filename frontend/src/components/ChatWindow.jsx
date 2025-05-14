import React, { useState } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      content: "Buenos días, soy Pocki. ¿Cómo puedo ayudarte hoy?",
    },
  ]);

  const handleSend = async (text) => {
    if (!text.trim()) return;

    const userMessage = { sender: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await fetch("http://localhost:3001/messages/crearMensaje", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: text, sender: "user" }),
      });

      const data = await res.json();

      if (data?.aiResponse) {
        const botMessage = { sender: "bot", content: data.aiResponse };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        throw new Error("Respuesta inválida del servidor");
      }
    } catch (error) {
      console.error("Error al conectar con el backend:", error.message);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          content: "⚠️ Hubo un problema al obtener la respuesta del bot.",
        },
      ]);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.chatBox}>
        <div style={styles.header}>🤖 Chat With Pocki</div>
        <div style={styles.messages}>
          {messages.map((msg, index) => (
            <Message key={index} sender={msg.sender} content={msg.content} />
          ))}
        </div>
        <MessageInput onSend={handleSend} />
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f0f2f5",
  },
  chatBox: {
    width: 400,
    height: 600,
    border: "1px solid #ccc",
    borderRadius: 7,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    background: "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  header: {
    backgroundColor: "#0C9C5E",
    color: "white",
    padding: "10px",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "1.1rem",
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
