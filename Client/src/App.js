import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Room from './components/Room';
import {UserDataProvider} from './context/User'
import ChatForm from './components/ChatForm'; // Importing ChatForm component

function App() {
  return (
    <>
     {/* <Router> */}
     
      <Navbar/>
    <div className="App">
       <Routes>
        <Route path='/' element={
        <UserDataProvider>
        <LandingPage/>
        </UserDataProvider>
        }/>
        <Route path='/room/:roomId' element={
        <UserDataProvider>
        <Room/>
        </UserDataProvider>
        } />
      </Routes>
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
