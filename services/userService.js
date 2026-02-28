const User = require("../models/userModel");

module.exports = {
  listUsers: () => User.getAll(),
  addUser: (name) => User.create(name)
};
