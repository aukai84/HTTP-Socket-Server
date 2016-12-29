//jshint esversion: 6

const net = require('net');

let client = net.createConnection(8080, 'localhost');