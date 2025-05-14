CREATE DATABASE chatbot_app;

USE chatbot_app;

CREATE TABLE messages(
	id_message INT PRIMARY KEY AUTO_INCREMENT,
	content TEXT NOT NULL,
	sender ENUM('bot', 'user')NOT NULL,
	timestamps TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
