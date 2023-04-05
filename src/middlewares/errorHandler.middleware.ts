import { Request, Response, NextFunction } from "express";


export function errorHandlerMiddleware(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction) {
    return res.status(error.status).
        send(error.message);
}