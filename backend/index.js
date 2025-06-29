import express from "express";
import cors from "cors";
import { querySQL } from "./config/db.js";

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
};
app.use(cors(corsOptions));

app.get('/', async (req, res) => {
    try {
        const data = await querySQL('SELECT * FROM users');
        res.json(JSON.stringify(data));
    } catch (error) {
        console.error("Error querying DB:", error);
        res.status(500).json({ error: "Database query failed" });
    }
});

app.listen(8080, () => {
    console.log("✅ Backend is running on port 8080");
});
