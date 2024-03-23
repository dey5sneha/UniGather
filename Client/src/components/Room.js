import React, {useEffect, useState, useContext} from 'react'
import { useSocket } from '../context/SocketContext';
import { useNavigate } from 'react-router-dom';
import ChatForm from './ChatForm';
import UserDataContext from "../context/User";
function Room() {
  const socket = useSocket();
  const [messages, setMessages] = useState([]);
  const { userName, roomId } = useContext(UserDataContext);
  const navigate = useNavigate();

  //Handling conneciton error
  socket.on('connectError', (error) => {
    console.error('Connection error:', error);
    // Redirect the user to the sign-in page
    navigate(`/`);
  });

  const handleSendMessage = (message) => {
    const data = {
      message : message,
      username : userName,
      roomId : roomId
    }

    socket.emit('message', data);
    const newMessage = { text: data.message, name : data.username};
    // Add the current message to the messages array
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleReceiveMessage = (data)=>{
    const newMessage = { text: data.message, name: data.username };
    // Add the current message to the messages array
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    // console.log(data);
    console.log((newMessage.UserName));
  }

  useEffect(()=>{
    socket.on('message', handleReceiveMessage);
    return ()=>{
      socket.off('message', handleReceiveMessage);
    }
  },[socket])

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            {message.name ? <strong>{message.name}: </strong> : null} {message.text}
          </div>
        ))}
      </div>
      <ChatForm onSendMessage={handleSendMessage} />
    </div>
  )
}

export default Room