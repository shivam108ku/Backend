import { pingHandler } from "../controller/ping.controller";
import express, { NextFunction, Request , Response } from "express";

const pingRouter = express.Router();



pingRouter.get("/ping", middleware1, middleware2, pingHandler);
export default pingRouter;

// middle ware1 --> middleware2 ---> pinghandler