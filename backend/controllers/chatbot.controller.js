import { pool } from "../config/db.js";

export const createMessage = async (req, res) => {
  try {
    const { content, sender } = req.body;

    if (!content || !sender) {
      return res.status(400).json({ error: "Faltan campos requeridos" });
    }

    const query = `
      INSERT INTO messages (content, sender)
      VALUES (?, ?)
    `;

    await pool.promise().execute(query, [content, sender]);

    res.status(201).json({ message: "Mensaje guardado correctamente" });
  } catch (error) {
    console.error("Error al guardar el mensaje:", error.message);
    res.status(500).json({ error: "Error al guardar el mensaje" });
  }
};
