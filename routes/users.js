const express = require('express');
const router = express.Router();
const users = require('../data/users');


router.get('/', (req, res) => {
  const { name } = req.query;
  let filteredUsers = users;

  if (name) {
    filteredUsers = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
  }

  res.render('index', { title: 'Users', data: filteredUsers, type: 'users' });
});


router.post('/', (req, res) => {
  const { id, name } = req.body;

  if (!id || !name) {
    return res.status(400).json({ error: "Please provide both ID and name" });
  }

  if (users.some(user => user.id === parseInt(id))) {
    return res.status(400).json({ error: "User with this ID already exists" });
  }

  users.push({ id: parseInt(id), name });
  res.status(201).json({ message: "User created", users });
});


router.patch('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  user.name = req.body.name || user.name;
  res.json({ message: "User updated", user });
});


router.delete('/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));

  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  const deletedUser = users.splice(userIndex, 1);
  res.json({ message: "User deleted", deletedUser });
});

module.exports = router;