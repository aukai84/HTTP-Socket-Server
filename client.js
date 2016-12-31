//jshint esversion: 6
const net = require('net');
var url = '';
let PORT = 8080;
let HOST = 'localhost';

process.argv.forEach(function (val, index, array) {
  url = array;
});

console.log(url);
PORT = 80;
HOST = url[2];

if (HOST === 'localhost'){
  PORT = 8080;
} else {
  PORT = 80;
}

let client = net.createConnection(PORT, HOST);

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




