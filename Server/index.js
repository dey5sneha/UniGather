const connectToMongo = require("./connections/db");
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

connectToMongo();
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: true,
});
const port = 8000;



io.on('connection', (socket) => {
    console.log('A user connected');
  
    //Handling the data from the client
    socket.on('join:call', (details)=>{
      console.log(details, socket.id);
      socket.emit('join:room', details);
    })
  
    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
  
  app.get('/',(_, res)=>{
    console.log("Server");
    res.send("Hi form Server");
  })

  server.listen(port, () => {
    console.log(`Server is listening on the port ${port}`);
  });