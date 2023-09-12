import { todo } from "./todo.schema.js";

import { join } from "path";
const Deletetodo = async ({ _id }) => {
    let Findtodo = await todo.findById({ _id })
    if (!Findtodo) {
        throw new Error("not found todo (~_~) ")
    }
    let Deletedtodo = await todo.findByIdAndDelete({ _id })
    return Deletedtodo
}

export { Deletetodo }