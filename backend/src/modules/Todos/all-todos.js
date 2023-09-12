import { todo } from "./todo.schema.js";


const todoList = async () => {
    let Alltodos = await todo.find({})
    return Alltodos
}
export { todoList }

