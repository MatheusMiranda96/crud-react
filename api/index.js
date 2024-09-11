import express from "express"
import cors from "cors"

const app = express()  /* CONSTRUÇÃO DA API*/

app.use(express.json()) /* UTILIZAÇÃO DO MODO JSON PARA POST E PUT */

app.unsubscribe(cors()) /* PARA EVITAR CONFLITOS DE ACESSO RODANDO LOCALMENTE */

app.listen(3000) /* APP ESCUTAR PORTA 3000 */