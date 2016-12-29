//jshint esversion: 6

const net = require('net');

// let server = net.createServer((socket) => {

// });

var server = net.createServer(function (socket) {
  socket.on('error', function(err) {
    console.error('SOCKET ERROR:', err);
  });

  socket.on('data', function(data){
    process.stdout.write(data);
  });

  // socket.write('Echo server\r\n');
  // socket.pipe(socket);
});

server.listen(8080, '0.0.0.0', () => {
  console.log('opened server on ', server.address());
});