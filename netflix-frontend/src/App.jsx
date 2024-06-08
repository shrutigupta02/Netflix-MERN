import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import Netflix from './Pages/Netflix';
import Signup from './Pages/Signup';
import Player from './Components/Player';
import Movies from './Pages/Movies';
import TVShows from './Pages/TVShows';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/login" element={<Login/>}/>
          <Route exact path = "/signup" element={<Signup/>}/>
          <Route exact path = "/" element={<Netflix/>}/>
          <Route exact path = "/player" element={<Player/>}/>
          <Route exact path = "/movies" element={<Movies/>}/>
          <Route exact path = "/tv" element={<TVShows/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
