import { pingHandler } from "../controller/ping.controller";
import  express, { NextFunction } from "express";

const pingRouter = express.Router();

function middleware(req: Request, res:Response, next: NextFunction){
    console.log("Middleware 1");
    next();
}

pingRouter.get('/ping',pingHandler)
 
export default pingRouter;