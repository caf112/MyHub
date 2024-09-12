const express = require('express');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0361',
    database: 'myhub_db'
});

app.get('/',(req,res) => {
    res.render('top.ejs');
});

app.get('/index',(req,res) => {
    connection.query(
        'SELECT * FROM items',
        (error,results) => {
            res.render('index.ejs',{items: results});
        }
    );
});

app.get('/new',(req,res) => {
    res.render('create.ejs');
});

app.post('/create',(req,res) => {
    connection.query(
        'INSERT INTO items (title) VALUES (?)',
        [req.body.newTitle],
        (error,results) => {
            res.redirect('/index');
        }
    );
});

app.listen(port, () => {
    // console.log(`Server is running at http://localhost:${port}`);
    console.log(`\x1b[4m\x1b[36m%s\x1b[0m`, `http://localhost:${port}`);
});