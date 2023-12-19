const express = require('express');

//register view engine
app.set('view engine', 'ejs'); //ejs looks for a views folder by default
//app.set('views', 'myviews'); //if you want to change the default views folder

// Create express instance
const app = express();

//listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
   res.render('about', {title: 'About'});
});


app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new post'});
});


//this will only be fired if the above routes are not fired
//404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'})  //status 404 is not found
}   );