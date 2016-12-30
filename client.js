//jshint esversion: 6

const net = require('net');
var url = '';

process.argv.forEach(function (val, index, array) {
  url = array;
});

let client = net.createConnection(80, 'www.google.com');

client.on("connect", () => {
  process.stdin.pipe(client);
  console.log("connected...");
});

client.on("data", (chunk) => {
  process.stdout.write(chunk);
});
