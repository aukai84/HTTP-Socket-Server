//jshint esversion: 6

const net = require('net');

let server = net.createServer((request, response) => {

  request.write(`Welcome to the server!\n`);
  request.pipe(request);

  request.on('data', )



});

server.listen(8080, '0.0.0.0', () => {
  console.log('opened server on ', server.address());
});