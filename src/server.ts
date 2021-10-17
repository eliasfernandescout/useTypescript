import express, { response } from 'express';
import { createCourse } from './routes';
const app = express();
// import { config } from 'dotenv';
require('dotenv').config();

app.get('/', createCourse);











app.listen(process.env.PORT, ()=>{
console.log(' 🟩 SERVER STARTED ON PORT 5002')
})