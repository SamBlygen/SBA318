const express = require('express');
const bodyParser = require('body-parser');


const usersRouter = require('./routes/users');
const postsRouter = require('./routes/announcements');
const updatesRouter = require('./routes/updates');

const app = express();


app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3000;


app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});


app.use('/users', usersRouter);  
app.use('/announcements', postsRouter);  
app.use('/updates', updatesRouter);  


app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});