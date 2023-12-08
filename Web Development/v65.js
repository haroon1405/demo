const fs = require('fs');
fs.readFile('v64.txt','utf-8',(err,data)=>{
    console.log(err,data);
});
console.log('This is a message');