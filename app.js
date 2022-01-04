const express = require('express');
const pageRoute = require('./routes/pageRoute')

const app = express();

const port = 3000;

// Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));

//Routes

app.use('/', pageRoute);

app.use('/about', pageRoute);

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
