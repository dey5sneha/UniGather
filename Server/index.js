const connectToMongo = require("./connections/db");
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const handleConnection = require('./connections/Socket')

connectToMongo();
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: true,
});
const port = 8000 || process.env.PORT;


//Socket io Connection
handleConnection(io);
  

  //Handling the https requests using express
  app.get('/',(_, res)=>{
    console.log("Server");
    res.send("Hi form Server");
  })

  server.listen(port, () => {
    console.log(`Server is listening on the port ${port}`);
  });