const express = require('express');
const router = express.Router();

const updates = require('../data/updates.js');
// Define routes
router.get('/', (req, res) => {
  res.json(updates );
});



module.exports = router;