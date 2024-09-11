import { db } from "../db.js"

export const getUsers = (_, res) => { /* Como é um  getUsers não precisamos usar request*/
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
}