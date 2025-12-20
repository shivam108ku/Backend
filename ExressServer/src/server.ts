import express from 'express';
import { serverConfig} from './config';
const app = express();

console.log("Env Loaded");

app.get('/ping', (req , res)=>{
    res.send('Pong');
});

app.listen(serverConfig.PORT, ()=>{
    console.log(`Server is running on the ${serverConfig.PORT}`);
});