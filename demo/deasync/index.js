// 异步变转换同步

const deasync = require("deasync");
const fs = require('fs');
const readFile = deasync(fs.readFile);

console.log('start');
const content = readFile('./package.json', 'utf8');
console.log(content);
console.log('end');
