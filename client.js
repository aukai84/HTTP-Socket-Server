//jshint esversion: 6

const net = require('net');
var url = '';

process.argv.forEach(function (val, index, array) {
  url = array;
});
console.log(url);
console.log(url[2]);
console.log(net.connect(www.google.com));

let client = net.createConnection(8080, 'localhost');
client.on("connect", () => {
  process.stdin.pipe(client);
  console.log("connected...");
});

client.on("data", (chunk) => {
  process.stdout.write(chunk);
});