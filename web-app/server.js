const express = require('express');
const app = express();
const people = require('./people.json');

const server = app.listen(8888, () => {
    console.log(`Express running -> PORT ${server.address().port}`);
})
//set view  engine to ejs
app.set('view engine', 'ejs')

// server static file from the public folder
app.use(express.static(__dirname + '/public'));

//index page
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Homepage',
        people: people.profiles,
    });
});

//profile
app.get('/profile', (req, res) => {
    console.log(req.query);
    const person = people.profiles.find(p => p.id === parseInt(req.query.id));
    console.log(person);
    res.render('profile', {
        // title: `About ${person.lastname}`,
        person,
    })
})