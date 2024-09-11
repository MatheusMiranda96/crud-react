import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();  /* CONSTRUÇÃO DA API*/

app.use(express.json()); /* UTILIZAÇÃO DO MODO JSON PARA POST E PUT */

app.use(cors()); /* PARA EVITAR CONFLITOS DE ACESSO RODANDO LOCALMENTE */

app.use("/", userRoutes);

app.listen(3000); /* APP ESCUTAR PORTA 3000 */