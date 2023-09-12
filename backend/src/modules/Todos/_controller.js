import { Addtodos } from "./add-todos.js"
import { todoList } from "./all-todos.js"
import { Deletetodo } from "./delete-todos.js"
import { findById } from "./findbyid-todo.js"
import { Updatetodo } from "./update-todo.js"

/**
 * 
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.Nextfunction} next 
 */

const todo_list = async (req, res, next) => {
    try {
        let all_todos = await todoList()
        res.status(200).json({ message: "nice", data: all_todos })
    } catch (error) {
        next(error)
    }
}

/**
 * 
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.Nextfunction} next 
 */

const add_todo = async (req, res, next) => {
    try {
        let addtodos = await Addtodos({ body: req.body })
        res.status(201).json({ message: "added", data: addtodos })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

/**
 * 
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.Nextfunction} next 
 * @returns 
 */

const update_todo = async (req, res, next) => {
    try {
        let Update_todo = await Updatetodo({ body: req.body, _id: req.params._id })
        return res.status(200).json({ message: "updated", data: Update_todo })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

/**
 * 
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.Nextfunction} next 
 * @returns 
 */

const delete_todo = async (req, res, next) => {
    try {
        let Deletetodos = await Deletetodo({ _id: req.params._id })
        res.status(200).json({ message: "user deleted sucses", data: Deletetodos })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const findby_id = async (req, res, next) => {
    try {
        let findUser = await findById({ _id: req.params })
        res.status(200).json({ message: "nice", data: findUser })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
export { todo_list, add_todo, update_todo, delete_todo, findby_id }