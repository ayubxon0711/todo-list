import config from "../shared/config/index.js";
import mongoose from "mongoose"

export function db() {
  try {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`).then(
      console.log("MongoDB Connection Succeeded... (▀̿Ĺ̯▀̿ ̿)")
    )
  } catch (error) {
    return "MongoDB Connection Succeeded. 😮😯🤬"
  }
}
