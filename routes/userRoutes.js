const express = require("express");
const router = express.Router();
const service = require("../services/userService");

router.get("/", async (req, res) => {
  res.json(await service.listUsers());
});

router.post("/", async (req, res) => {
  const { name } = req.body;
  res.json(await service.addUser(name));
});

module.exports = router;
