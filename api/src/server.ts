import 'reflect-metadata';
import express from 'express';
import "./database"
import { router } from './routes';

const app = express();

app.use(router);

app.get("/users", (req, res) => {
    return res.json({ message: "Hello"});
});

app.post("/", (req, res) => {
    return res.json({ message: "Dados salvos"});
})

app.listen(3333, () => {console.log("Servidor rodando!")}); 

