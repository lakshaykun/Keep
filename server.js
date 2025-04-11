const express = require('express');
const path = require('path');
const port = 4000;
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
    res.render('index');
})

app.get('/welcome', (req, res) => {
    res.render('welcome')
})

app.listen(port);
console.log(`http://localhost:${port}/`)