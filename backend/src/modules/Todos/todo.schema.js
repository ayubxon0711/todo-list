import mongoose from "mongoose";

let todoSchema = new mongoose.Schema({
    text: String
})

const todo = mongoose.model('Users', todoSchema);
export { todo } 