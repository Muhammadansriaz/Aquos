import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import TvShows from './Pages/TvShows';
import Movies from './Pages/Movie';
import RecetlyAdded from './Pages/Recetly_Added';


function App() {



  return (


    <div className="AppRouter">
      <Router>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<TvShows />} path="/tvshows" />
          <Route element={<Movies />} path="/movies" />
          <Route element={<RecetlyAdded />} path="/recently_added" />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
