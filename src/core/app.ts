import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bookRouter from "../routes/book.route";
import authorRouter from "../routes/author.route";
import connectDB from "../config/database.config";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());
app.use('/api/books', bookRouter);
app.use('/api/authors', authorRouter)

connectDB();


function useApp() {

    app.get("/", (req: Request, res: Response) => {
        res.send("Ping successfully");
    });

    return app
}

export { useApp }