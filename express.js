const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const port = 3000;






app.get('/users',( req, res)=>{
res.json(users);
});



app.get('/posts', (req, res)=>{
  res.json(posts);
});

app.get('/comments', (req,res )=>{
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
