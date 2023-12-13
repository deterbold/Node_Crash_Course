const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
  
    // lodash
    const num = _.random(0, 20);
    console.log(num);

    //function that will only run once
    //regardless of how often we call it
    const greet = _.once(() => {
        console.log('hello');
    });


  //set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        //redirect
        case '/about-it':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    
    //read file
    fs.readFile('./views/index.html', (err, data) => {
        if(err){
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
            //res.end(data); //same as above
        }
    });
});

server.listen(3000, 'localhost', () => { 
    console.log('listening for requests on port 3000');
});