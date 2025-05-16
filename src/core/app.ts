import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "../config/database.config";
import bookRouter from "../routes/book.route";
import authRouter from '../routes/auth.route';
import authorRouter from "../routes/author.route";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());

// Auth Routes
app.use('/api/auth', authRouter);
app.use('/api/', bookRouter);
app.use('/api/', authorRouter)

connectDB();


function useApp() {
    app.get("/", (req: Request, res: Response) => {
        res.send("Ping successfully");
    });

    return app
}

export { useApp }