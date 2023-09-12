import express from "express";
import config from "./shared/config/index.js";
import { db } from "./db/index.js";
import { router as UserRouter } from "./modules/Todos/_api.js";
import cors from "cors"
const app = express();

db()
app.use(express.json())
app.use(cors())
app.use("/todos", UserRouter)
app.use("/*", (req, res) => {
    return res.send({
        message: "buna route yoq ey inson bolasi (▀̿Ĺ̯▀̿ ̿)"
    })
})
app.listen(config.port, config.host, () => {
    console.log("Server runing... http://localhost:4000/");
})
