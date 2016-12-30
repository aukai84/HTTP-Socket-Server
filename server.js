//jshint esversion: 6

const net = require('net');
const htmls = require('./htmlSource.js');

let index = htmls.index;
let helium = htmls.helium;
let hydrogen = htmls.hydrogen;
let styles = htmls.styles;

let hydrogenHeader = `HTTP/1.1 200 OK
Server: nginx/1.4.6 (Ubuntu)
Date: Wed, 08 Jul 2015 22:31:15 GMT
Content-Type: text/html; charset=utf-8
Content-Length: ${hydrogen.length}
Connection: keep-alive\n`;

let heliumHeader = `HTTP/1.1 200 OK
Server: nginx/1.4.6 (Ubuntu)
Date: Wed, 08 Jul 2015 22:31:15 GMT
Content-Type: text/html; charset=utf-8
Content-Length: ${helium.length}
Connection: keep-alive\n`;

let indexHeader = `HTTP/1.1 200 OK
Server: nginx/1.4.6 (Ubuntu)
Date: Wed, 08 Jul 2015 22:31:15 GMT
Content-Type: text/html; charset=utf-8
Content-Length: ${index.length}
Connection: keep-alive\n`;
console.log(hydrogen.length);
var server = net.createServer(function (socket) {

  socket.setEncoding('utf8');

  socket.on('error', function(err) {
    console.error('SOCKET ERROR:', err);
  });

  socket.on('data', function(data){

    console.log(data);
    let requestArray = data.split('\r\n');
    let anotherArray = [];
    for(let i =0; i < requestArray.length; i++){
    anotherArray.push(requestArray[i].split(' '));
  }
  console.log(anotherArray);
    if(anotherArray[0][0] === 'GET'){
      if(anotherArray[0][1] === '/hydrogen.html'){
       socket.write(`${hydrogenHeader}\n${hydrogen}`);
      } else if(anotherArray[0][1] === '/helium.html'){
        socket.write(`${heliumHeader}\n${helium}`);
      } else if(anotherArray[0][1] === '/index.html'){
        socket.write(`${indexHeader}\n${index}`);
      }
    }

    // if(anotherArray[0][0] === 'HEAD'){
    //   if(anotherArray[0][1] === '/hydrogen.html'){
    //      socket.write(header);
    //   } else if(anotherArray[0][1] === '/helium.html'){
    //     socket.write(header);
    //   } else if(anotherArray[0][1] === '/index.html'){
    //     socket.write(header);
    //   }
    // }
    socket.end();

  });




  // socket.write('Echo server\r\n');
  // socket.pipe(socket);
});

server.listen(8080, '0.0.0.0', () => {
  console.log('opened server on ', server.address());
});