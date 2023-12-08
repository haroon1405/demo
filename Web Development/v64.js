const fs = require('fs');
let text = fs.readFileSync('v64.txt','utf-8');
text = text.replace('Browser','Server');
console.log(text);
console.log("creating a new file....");
fs.writeFileSync('v64(2).txt',text);