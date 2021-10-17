import express, { response } from 'express';
const app = express();
import { config } from 'dotenv';
// require('dotenv').config()

app.get('/home', (request, response)=>{
    response.send({
        nome: 'Olá, estou aqui;'
    })
})

app.listen(process.env.PORT, ()=>{

})