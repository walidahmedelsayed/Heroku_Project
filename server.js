const express = require('express');
const hbs = require('hbs');
var app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
  res.send("This is the home page \n Walid Ahmed")
});
app.get('/about', (req, res) => {
  res.render('myPage.hbs');
})
app.get('/w', (req, res) => {
  res.send("Welcome Walid :D");
})

app.listen(port);