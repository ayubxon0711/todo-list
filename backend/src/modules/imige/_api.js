import express from "express";
import { download_image, show_image } from "./_controller.js";

let router = express.Router()

router.get("/:filename", show_image)
router.get("/download/:filename", download_image)

export { router }