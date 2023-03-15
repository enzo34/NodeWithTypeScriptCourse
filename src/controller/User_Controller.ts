import User from "../model/User";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const signUp = (req: Request, res: Response) => {
    let user = new User(req.body);
    user.password = bcrypt.hashSync(user.password, 10);
    user.save().then((user) => {
        res.status(200).json(user);
    }
    ).catch((err) => {
        res.status(500).json({ message: err.message });
    });
}

export const signIn = (req: Request, res: Response) => {
    const { email, password } = req.body;

    User.findOne({ email: email }).then((user) => {
        bcrypt.compare(password, user.password).then((result) => {
            if (result) {
                const token = jwt.sign({ email: email }, process.env.JWT_TOKEN, { expiresIn: "12h" });
                res.status(200).json({ token: token });
            }
            else {
                res.status(401).json({ message: "Authentication failed" });
            }
        }).catch((err) => {
            res.status(500).json({ message: err.message });
        });
    }).catch((err) => {
        res.status(500).json({ message: err.message });
    }
    );
}   