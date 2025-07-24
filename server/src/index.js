import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import noteRoutes from "./routes/noteRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/notes", noteRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
