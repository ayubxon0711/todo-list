import express from "express";
import { todo_list, add_todo, update_todo, delete_todo, findby_id } from "./_controller.js";

let router = express.Router()

router.get("/", todo_list)
router.get("/:_id", findby_id)
router.post("/", add_todo)
router.put("/:_id", update_todo)
router.delete("/:_id", delete_todo)
export { router }