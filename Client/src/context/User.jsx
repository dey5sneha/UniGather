import React, { createContext, useState } from 'react';

const UserDataContext = createContext();

export const UserDataProvider  = ({ children }) => {
  const [userName, setUsername] = useState('');

  return (
    <UserDataContext.Provider value={{ userName, setUsername}}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
