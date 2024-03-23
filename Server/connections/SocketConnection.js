const checkAuthenticationAndData = require('../middlewares/Auth');


const users = new Map();

const handleConnection = (io)=> {
    io.on('connection', (socket) => {
        // console.log('A user connected', socket.id);
        socket.emit('WelcomeMessage', "Welcome in the Meeting");
        socket.broadcast.emit('message', 'A user has joind');
        //Request to join the room
        socket.on('join:call', (details)=>{
          console.log(socket.handshake.query);
          const {name,email, code} = details;
          users.set(socket.id,{
            name,
            email,
            code,
            socketId: socket.id,
          });
          console.log(details, socket.id);
          //Allowing to join the room
          socket.emit('join:room', details);
        });
    
        //Upcoming message from the user
        socket.on('message', (data) => {
          checkAuthenticationAndData(socket, data, () => {
              // If authentication and data are valid, proceed with message handling
              socket.broadcast.emit('message', data);
          });
        });
        // Handling disconnection
        socket.on('disconnect', () => {
          io.emit('message', 'A user has left the meet');
          console.log('User disconnected');
        });
    });
}

module.exports = handleConnection;
