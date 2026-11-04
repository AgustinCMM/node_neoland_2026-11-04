import express from 'express';
import 'dotenv/config';

const api= express();
api.use(express.json());
const port= process.env.PORT;

api.get("/", (req, res)=>{
    res.status(201).send("Funciona");
})

api.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})