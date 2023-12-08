const express = require("express");
const path = require('path');
const fs = require('fs');

const app = express();
const port = 80;

//serving static files
app.use('/static', express.static('static'));
// Middleware to parse form data
app.use(express.urlencoded())

//set template engine as pug
app.set('view engine', 'pug');
//set views directory
app.set('views', path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    const con = "Best on internet";
    const params = {'title':'PuG Demo', 'content': con};
    res.status(200).render('index.pug',params);
});

app.post('/', (req,res)=>{
    let name = req.body.name;
    let age = req.body.age;
    let gender = req.body.gender;
    let address = req.body.address;
    let more = req.body.more;
    let output = `name is ${name} and age is ${age}`;
    fs.writeFileSync('output.txt', output);
    const params = {'message':'Your form has been submitted'};
    res.status(200).render('index.pug',params);
});




// //pug demo endpoint 
// app.get("/demo",(req,res)=>{
//     res.render('demo', { title: 'Hey Haroon', message: 'Hello there Haroon!' })
// });


// app.get("/",(req,res)=>{
//     res.send("My first Express App");
// });

// app.get("/about",(req,res)=>{
//     res.send("About Page of My first Express App");
// });

// app.post("/about",(req,res)=>{
//     res.send("POST Request, About Page of My first Express App");
// });

// app.get("/this",(req,res)=>{
//     res.status(404).send("Page not found");
// });

app.listen(port, ()=>{
    console.log(`The app started on port ${port}`);
})