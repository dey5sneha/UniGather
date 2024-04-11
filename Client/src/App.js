import './App.css';
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Room from './components/Room';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/room/:roomId' element={<Room/>} />
      </Routes>
    </div>
  );
}

export default App;
