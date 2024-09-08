const express = require('express');
const bodyParser = require('body-parser');


const usersRouter = require('./routes/users');
const postsRouter = require('./routes/announcements');
const updatesRouter = require('./routes/updates');

const app = express();


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to my trial and error!');
});

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


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});