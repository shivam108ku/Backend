import { Request , Response } from "express"

export const pingHandler = async (req: Request , res:Response) => {
    res.send('Pong')
}