import express from 'express';
import { serverConfig} from './config';
import pingRouter from './router/ping.router.js';
const app = express();

console.log("Env Loaded");

app.use(pingRouter)

// these are the main way to make this 

app.listen(serverConfig.PORT, ()=>{
    console.log(`Server is running on the ${serverConfig.PORT}`);
});