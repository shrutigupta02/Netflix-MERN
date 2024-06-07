import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import Netflix from './Pages/Netflix';
import Signup from './Pages/Signup';
import Player from './Components/Player';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/login" element={<Login/>}/>
          <Route exact path = "/signup" element={<Signup/>}/>
          <Route exact path = "/" element={<Netflix/>}/>
          <Route exact path = "/player" element={<Player/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
