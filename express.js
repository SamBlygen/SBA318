const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware for parsing request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define the port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
