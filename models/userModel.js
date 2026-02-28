const pool = require("../db");

const User = {
  getAll: async () => {
    const res = await pool.query("SELECT * FROM users");
    return res.rows;
  },

  create: async (name) => {
    const res = await pool.query(
      "INSERT INTO users(name) VALUES($1) RETURNING *",
      [name]
    );
    return res.rows[0];
  }
};

module.exports = User;
