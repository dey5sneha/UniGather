import React, { createContext, useState } from 'react';

const UserDataContext = createContext();

export const UserDataProvider  = ({ children }) => {
  const [userName, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');

  return (
    <UserDataContext.Provider value={{ userName, setUsername, roomId, setRoomId}}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
