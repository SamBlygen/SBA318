const express = require('express');
const router = express.Router();
const announcements = require("../data/announcements.js");

router.get('/', (req, res) => {
  res.json(announcements);
});

router.get('/view', (req, res) => {
  res.render('announcements', { announcements });
});

router.post('/', (req, res)=>{
  const newAnnouncement = {
    id: newAnnouncement.length + 1, 
    content: req.body.content
  };
  announcements.push(newAnnouncement);
  res.status(201).json(newAnnouncement);
});

router.patch('/:id', (req, res)=>{
  const announcementId = parseInt(req.params.id);
  const announcement = announcements.find (a => a.id === announcementId);
  if (announcement){
    announcement.content = req.body.content || announcement.content;
    res.json(announcement);
  } else{
    res.status(404).json({message: "Announcement not found"});
  }
});

router.delete('/:id', (req, res)=>{
  const announcementId = parseInt(req.params.id);
  const index = announcements.findIndex(a => a.id === announcementId);
  if(index !== -1){
    announcements.splice(index, 1);
    res.status(204).send();
  } else{
    res.status(404).json({message:"Announcement not found"});
  }
});

module.exports = router;