import express, { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


export const verifyAuthorization = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
            if (err) {
                res.status(401).json({ message: "Authentication failed" });
            }
            else {
                next();
            }
        });
    } else {
        res.status(401).json({ message: "Authentication failed" });
    }
}