import { todo } from "./todo.schema.js";

const Updatetodo = async ({ body, _id }) => {
    let Findtodo = await todo.findById({ _id })
    if (!Findtodo) {
        throw new Error("todo not found :( ")
    }
    let update_todos = todo.findOneAndUpdate({ _id }, body)
    return update_todos
}
export { Updatetodo }