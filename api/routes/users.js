import express from "express";
import { getUsers } from "../controlles/user.js";


const router = express.Router(); /* PARA INDICAR QUE ISSO VAI SER UMA ROTA */

router.get('/', getUsers);

export default router;
