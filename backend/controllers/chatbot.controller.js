import { pool } from "../config/db.js";

// axios es para hacer solicitudes HTTP
import axios from "axios";

export const createMessage = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ error: "Faltan campos requeridos" });
    }

    // Guardar el mensaje en la base de datos
    const query = `
      INSERT INTO messages (content, sender)
      VALUES (?, ?)
    `;
    await pool.promise().execute(query, [content, "user"]);

    // Realizar la solicitud a la API de la IA
    const openAIResponse = await axios.post(
      "http://pocki-api-env-1.eba-pprtwpab.us-east-1.elasticbeanstalk.com/api/getOpenaiResponse",
      {
        input: content,
      }
    );
    console.log(openAIResponse.data.choices[0]);

    const aiMessage = openAIResponse.data.choices[0].message.content;
    
    const querybot = `
      INSERT INTO messages (content, sender)
      VALUES (?, ?)
    `;

    await pool.promise().execute(querybot, [aiMessage, "bot"]);

    res.status(201).json({
      message: "Mensaje guardado correctamente",
      aiResponse: aiMessage,
    });
  } catch (error) {
    console.error("Error al guardar el mensaje:", error.message);
    res.status(500).json({
      error: "Error al guardar el mensaje o al obtener la respuesta de la IA",
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    const query = "SELECT * FROM messages";
    const [rows] = await pool.promise().query(query);

    if (rows.length === 0) {
      return res.status(404).json({ message: "No se encontraron mensajes" });
    }
    res.status(200).json(rows);
  } catch (error) {
    console.log("Error al obtener los mensajes:", error.message);
    res.status(500).json({ error: "Error al obtener los mensajes" });
  }
};
