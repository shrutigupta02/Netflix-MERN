import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import Netflix from './Pages/Netflix';
import Signup from './Pages/Signup';
import Player from './Components/Player';
import Movies from './Pages/Movies';
import TVShows from './Pages/TVShows';
import SearchResults from './Pages/SearchResults';
import Info from './Pages/Info';

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
          <Route exact path = "/search" element={<SearchResults/>}/>
          <Route exact path = "/details" element={<Info/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
