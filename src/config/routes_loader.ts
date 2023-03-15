import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import { connectionToDatabase } from "./connection";
import { routerShoes } from "../routes/Shoes_Routes";
import { routerUser } from "../routes/User_Routes";
import { verifyAuthorization } from "../middlewares/verifyToken";

export const routesLoader = (app: express.Application) => {

    /**
     * Middlewares
     * 
     * /!\ The order of the middlewares is important
     * because the middlewares are called in the order
     * they are added
    */
    app.use(bodyParser.json());
    app.use(cors());
    app.use(helmet());

    /**
     * Connection to database
     * 
     * /!\ The connection to database must be done
     * before the routes
     */
    connectionToDatabase;

    // Routes
    app.get("/", (req: Request, res: Response) => {
        console.log("Main route called");
        res.send("Hello, world!");
    });

    /**
     * Routes for visitor
     */
    app.use("/user", routerUser);

    /**
     * Routes for authentified user
     * 
     * /!\ This route must be after the route for visitor
     * because the middleware verifyAuthorization is called
     * before the route for visitor
     **/
    app.use(verifyAuthorization);

    /**
     * Routes for authentified user
     * 
     * /!\ This route must be after the route for authentified user
     * because the middleware verifyAuthorization is called
     * before the route for authentified user
     */
    app.use("/shoes", routerShoes);
}