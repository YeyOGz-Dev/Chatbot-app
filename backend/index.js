import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import messagesRoutes from "./routes/messagesRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:3000"}));
app.use(express.json());

// Conectar a la base de datos
connectDB();
app.use("/messages", messagesRoutes);

app.listen(process.env.PORT, () => {
  console.log("Servidor escuchando en el puerto", process.env.PORT);
});
