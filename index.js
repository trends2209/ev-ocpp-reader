const WebSocket = require('ws');

// Use the IP address of your EV charger and port 80
const url = 'ws://192.168.1.10:80';

const ws = new WebSocket(url);

ws.on('open', () => {
  console.log('Connected to the EV charger WebSocket server');
});

ws.on('message', (data) => {
  console.log('Received data:', data);
});

ws.on('error', (error) => {
  console.error('WebSocket error:', error);
});

ws.on('close', () => {
  console.log('Connection closed');
});
