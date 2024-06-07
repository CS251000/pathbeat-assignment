import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5500/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='movie-details'>
      <h2>{movie.title}</h2>
      <p>{movie.longDescription}</p>
    </div>
  );
};

export default MovieDetail;
