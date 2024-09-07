const express = require('express');
const router = express.Router();
const users = require("../data/users.js");


router.get('/', (req, res) => {
  res.json(users);
});

router.get('/', (req, res) => {
  const { name } = req.query;
  let filteredUsers = users;

  if (name) {
    filteredUsers = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
  }
  res.json(filteredUsers);
});

router.post('/',( req, res)=>{
const {id, name} = req.body;
if(!id || !name){
  return res.status(400).json({error: "Please update ID and name"})
}
users.push({id, name});
res.status(201).json({message: "user created", users});
});

router.patch('/:id', (req, res)=>{
  const user = users.find(u =>u.id === parseInt(req.params.id));
  if(!user){
    return res.status(404).json({error:"user not found"});
  }
  user.name = req.body.name || user.name;
  res.json({message: "user updated, user"});
});

router. delete('/:id', (req, res)=>{
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1){
    return res.status(404).json({errpr: "User not found"});
  }
  users.splice(userIndex, 1);
  res.json({message:"user deleted, user"})
});



module.exports = router;