import { Router } from "express";
import {
  createMessage,
  getMessages,
} from "../controllers/chatbot.controller.js";

const router = Router();

router.post("/crearMensaje", createMessage);
router.get("/obtenerMensajes", getMessages);

export default router;
