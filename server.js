//jshint esversion: 6

const net = require('net');
const htmls = require('./htmlSource.js');

let index = htmls.index;
let helium = htmls.helium;
let hydrogen = htmls.hydrogen;
let styles = htmls.styles;

var server = net.createServer(function (socket) {

  socket.setEncoding('utf8');

  socket.on('error', function(err) {
    console.error('SOCKET ERROR:', err);
  });

  socket.on('data', function(data){
    console.log(data);
  });

  socket.end(helium);

  // socket.write('Echo server\r\n');
  // socket.pipe(socket);
});

server.listen(8080, '0.0.0.0', () => {
  console.log('opened server on ', server.address());
});