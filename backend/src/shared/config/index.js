import dotenv from "dotenv/config";
const config = {
  host: process.env.HOST,
  port: process.env.PORT,
  db: {
    host: process.env.db_HOST,
    port: process.env.db_PORT,
    name: process.env.db_NAME,
  },
  jwt: {
    key: process.env.secret_key,
    EXPIRES_IN: process.env.JWT_
  },
  salt: process.env.SALT
};

export default config