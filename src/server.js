import express from "express";

import config from "./config/config.js";
import UserRoute from "./routes/user.routes.js";
import connectDB from "./config/database.js";

const app = express();
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/about", (req, res) => {
    res.send("About page");
});

app.use("/api/users", UserRoute);

