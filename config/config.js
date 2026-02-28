const dotenv = require("dotenv");
const env = process.env.NODE_ENV || "dev";

dotenv.config({ path: `.env.${env}` });

module.exports = {
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT
};
