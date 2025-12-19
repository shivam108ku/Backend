import express from 'express';
import loadEnv from './config';
const app = express();

loadEnv();
console.log("Env Loaded");

app.get('/ping', (req , res)=>{
    res.send('Pong');
});

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on the ${process.env.PORT}`);
});