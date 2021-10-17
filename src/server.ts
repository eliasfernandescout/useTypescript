import express, { response } from 'express';
const app = express();
// import { config } from 'dotenv';
require('dotenv').config();

app.get('/', (request, response)=>{
    response.json({
        nome: 'Olá, estou aqui;'
    })
})

app.listen(process.env.PORT, ()=>{
console.log(' 🟩 SERVER STARTED ON PORT 5002')
})