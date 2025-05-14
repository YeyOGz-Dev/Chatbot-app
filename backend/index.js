import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import messagesRoutes from "./routes/messagesRoutes.js";
import { connectDB } from "./config/db.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const swaggerDocument = YAML.load("./docs/swagger.yaml");

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Conectar a la base de datos
connectDB();
app.use("/messages", messagesRoutes);

app.listen(process.env.PORT, () => {
  console.log("Servidor escuchando en el puerto", process.env.PORT);
});
