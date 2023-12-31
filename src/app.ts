import express from 'express';
import http from 'http';

import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');
});

const port = process.env.PORT || 3000;

app.use(express.json());

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
