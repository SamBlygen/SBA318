const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const port = 3000;

app.get('/users', (req,res)=>{
  res.json(users)
});
let users = [
  {id: 1, name: 'Eric' },
  {id: 2, name: 'Mason'},
  {id: 3, name: 'Zoe'},
  {id: 4, name: 'Arlene'},
];


app.get('/posts', (req, res)=>{
  res.json(posts);
});
let posts = [
  {id:1, userID: 1, content: 'Wah Gwann'},
  {id:2, userID: 2, content: 'Welcome to Jamaica'},
  {id:3, userID: 3, content: 'Lets have fun!'},
  {id:4, userID: 4, content: 'Live, Love and be Thankful'},
];

app.get('/comments', (req,res )=>{
  res.json(comments);
});
let comments = [
  {id:1, postID: 1, userID: 2, comment: "Have fun!"},
  {id: 2, postID: 4, userID: 3, comment: "Lets go! "},
  {id: 3, postID: 2, userID: 1, comment: "Thanks for sharing"},
  {id: 4, postID: 3, userID: 4, comment: "Nice Post"}
];

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
