import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
// import SignUp from './components/SignUp';
import Room from './components/Room';
import { UserDataProvider } from './context/User'

function App() {
  return (
    <>

      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={
            <UserDataProvider>
              <LandingPage />
            </UserDataProvider>
          } />
          <Route path='/room/:roomId' element={
            <UserDataProvider>
              <Room />
            </UserDataProvider>
          } />

          {/* <Route path='/signup' element={
            <SignUp />
          } /> */}

        </Routes>

      </div>
      
    </>
  );
}

export default App;
