import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.imageUrl} alt={movie.title} />
    <h3>{movie.title}</h3>
    
    <p>{movie.shortDescription}</p>
    <Link to={`/movies/${movie._id}`} className='read'>Read more</Link>
  </div>
);

export default MovieCard;
