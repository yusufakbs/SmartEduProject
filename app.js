const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
const app = express();

const port = 3000;

// Connect DB

mongoose
  .connect('mongodb://localhost/smartedu-db')
  .then(() => {
    console.log('DB connected Succesfull');
  });

// Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))  // for parsing application/x-www-form-urlencoded

//Routes

app.use('/', pageRoute);
app.use('/about', pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);


app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
