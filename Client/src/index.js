import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { SocketProvider } from './context/SocketContext';
import { UserDataProvider  } from "./context/User";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Removed strictmode due to twice rendering of use effect hook
    <BrowserRouter>
      <UserDataProvider >
        <SocketProvider>
          <App />
        </SocketProvider>
      </UserDataProvider >
    </BrowserRouter> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
