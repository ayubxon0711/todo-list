import { todo } from "./todo.schema.js";
let Addtodos = async ({ body, file }) => {
    let { text } = body
    let Createdtodo = await todo.create(body)
    return Createdtodo
}
export { Addtodos }