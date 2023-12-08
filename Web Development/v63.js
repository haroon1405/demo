// console.log("Hello World");

const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo Selectors</title>
      <style>
          .container{
              border: 2px solid red;
              background-color: rgb(217, 245, 217);
              margin: 34px auto;
              padding: 34px;
              width: 666px;
          }
          a{
              text-decoration: none;
              color: black;
          }
          a:hover{
              color: black;
              background-color: beige;
          }
          a:visited{
              background-color: blue;
          }
          a:active{
              background-color: yellow;
          }
          .btn{
              background-color: crimson;
              font-family: Arial, Helvetica, sans-serif;
              padding: 6px;
              border: none;
              cursor: pointer;
              font-size: 13px;
              border-radius: 4px;
          }
          .btn:hover{
              background-color: lavender;
              border: 2px solid gold;
          }
      </style>
  </head>
  <body>
      <div id="cont1" class="container">
          <h3>This is my heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cupiditate. Temporibus nesciunt culpa delectus suscipit voluptatibus, at minima nam similique! Quo, maiores beatae non recusandae veniam nulla ratione. Nulla eum illo voluptatem maiores repudiandae. Sit praesentium in minima architecto nesciunt.</p>
          <a href="https://google.com" class="btn">Read More</a>
          <button class="btn">Contact Us</button>
      </div>
  </body>
  </html>`);
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
