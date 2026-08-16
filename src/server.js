import { config } from "dotenv";
import express from "express";
import config from "./config/config.js";

import UserRoute from "./routes/user.routes.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/about", (req, res) => {
    res.send("About page");
});


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

app.use("/api/users", router);

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});