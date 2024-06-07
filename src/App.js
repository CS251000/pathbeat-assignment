import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieCard from './Components/MovieCard';
import MovieDetail from './Components/MovieDetail';
import axios from 'axios';
import './App.css'

const App = () => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:5500/movies')
      .then(response => {
        setMovies(response.data);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <h1 className="title">Movie Homepage</h1>
              {movies.map(movie => (
                <MovieCard key={movie._id} movie={movie} />
              ))}
            </div>
          }
        />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
