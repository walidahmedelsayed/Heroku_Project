const express = require('express');
const hbs = require('hbs');
var app = express();
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
  res.send("This is the home page \n Walid Ahmed")
});
app.get('/about', (req, res) => {
  res.render('myPage.hbs');
})


app.listen(3000);