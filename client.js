//jshint esversion: 6

const net = require('net');

let client = net.createConnection(8080, 'localhost');
client.on("connect", () => {
  process.stdin.pipe(client);
  console.log("connected...");
});

client.on("data", (chunk) => {
  process.stdout.write(chunk);
});