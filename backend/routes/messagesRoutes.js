import { Router } from "express";
import { createMessage } from "../controllers/chatbot.controller.js";

const router = Router();

router.post("/crearMensaje", createMessage);

export default router;
