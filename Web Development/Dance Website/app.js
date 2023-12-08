const http = require('http');  // importing all libraries
const express = require('express');
const path = require('path');
const app = express();
const port = 80;

app.use('/static', express.static('static'));  //serving static files
app.use(express.urlencoded());   // middleware for forms

app.set('view engine','pug');   // set view engine as pug
app.set('views',path.join(__dirname,'views')); // set views direc

app.get('/',(req,res)=>{        // route handler for GET requests
    const params = {};          // stores data
    res.status(200).render('index.pug',params);      // generates html
});

app.listen(port,()=>{        // listens for requests
    console.log(`The application has started at Port-${port}`);
});
