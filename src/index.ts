import express, { Application } from "express";
import { routesLoader } from "./config/routes_loader";

const app: Application = express();
const port: number = 3000;

routesLoader(app);

/**
 * Start server
 * 
 * /!\ The server must be started after the connection
 * to database and after the routes
 */
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
