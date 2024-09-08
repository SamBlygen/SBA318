const express = require('express');
const router = express.Router();

const updates = require('../data/updates.js');

router.get('/', (req, res) => {
  res.json(updates );
});


router. post('/:id', (req, res)=>{
const newUpdate ={
  id: updates.length + 1, 
  content:req.body.content
};
updates.push(newUpdate);
res.status(201).json(newUpdate);
});

router.patch('/:id', (req, res)=>{
  const updateId = parseInt(req.params.id);
  const update = updates.find(u => u.id === updateId);
  if(update){
    update.content = req.body.content || update.content;
    res.json(update);
  } else {
    res. status(404).json({message: "update not found"});
  }
});

router.delete('/:id', (req, res)=>{
  const updateId = parseInt(req.params.id);
  const index = updates.findIndex(u => u.id === updateId);
  if( index !== -1){
    updates.splice(index, 1);
    res.status(204).send();
  }else{
    res.status(404).json({message:"update not found"});
  }
});

module.exports = router;