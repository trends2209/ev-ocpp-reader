const WebSocket = require('ws');

const server = new WebSocket.Server({ port: process.env.PORT || 8080 });

server.on('connection', (ws) => {
  console.log('Client connected');
  
  ws.on('message', (message) => {
    console.log('Received:', message);
    ws.send(`You sent: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running...');
