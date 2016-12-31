//jshint esversion: 6
const net = require('net');
var url = '';
let port = 8080;
let host = 'localhost';

process.argv.forEach(function (val, index, array) {
  url = array;
});

console.log(url);
port = 80;
host = url[2];

if (host === 'localhost'){
  port = 8080;
} else {
  port = 80;
}

let client = net.createConnection(port, host);

client.setEncoding('utf8');

client.on("connect", () => {
  //process.stdin.pipe(client);
  console.log(`connected to ${HOST}`);
  client.write(`GET / HTTP/1.1\nHost: ${HOST}\nConnection: Keep-Alive\n\n`);
});

client.on("data", (chunk) => {
  console.log(chunk);
  client.end();
});




