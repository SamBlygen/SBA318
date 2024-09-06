const express = require('express');
const router = express.Router();
const announcements = require("../data/announcements.js");
// Define routes
router.get('/', (req, res) => {
  res.json(announcements);
});

module.exports = router;