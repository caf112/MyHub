const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');
const images = [
    { path: '/images/b1.JPG', name: 'Image 1' },
    { path: '/images/b2.JPG', name: 'Image 2' },
    { path: '/images/background.JPG', name: 'Image 3' }
  ];

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    res.render('top.ejs');
});

app.get('/home',(req,res) => {
    res.render('home.ejs');
});

app.get('/photo_gallery', (req, res) => {
    res.render('photo_gallery', { images: images });
  });

// app.get('/home',(req,res) => {
//     connection.query(
//         'SELECT * FROM items',
//         (error,results) => {
//             res.render('home.ejs',{items: results});
//         }
//     );
// });

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
    console.log(`\x1b[4m\x1b[36m%s\x1b[0m`, `http://localhost:${port}`);
});