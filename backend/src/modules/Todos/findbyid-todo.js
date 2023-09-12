import { todo } from "./todo.schema.js"

const findById = async ({ _id }) => {
    let findtodo = await todo.findOne({ _id })
    if (!findtodo) {
        throw new Error("bunday todo yoq (▀̿Ĺ̯▀̿ ̿)")
    }
    return findtodo
}
export { findById }