const express = require('express');
const router = express.Router();
const users = require("../data/users.js");
// Define routes

router.get('/', (req, res) => {
  res.json(users);
});

module.exports = router;