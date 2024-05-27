import React from 'react';
import './MovieDetail.css';


const MovieDetail = ({ movie, onClose, onAddToCart }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  if (!movie) return null;

  return (
    <div className="movie-detail">
      <button className="close-button" onClick={onClose}>X</button>
      <div className="movie-detail-content">
        <div className="movie-detail-poster">
          <img src={API_IMG + movie.poster_path} alt={movie.title} />
        </div>
        <div className="movie-detail-info">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <button className="add-to-cart-button" onClick={() => onAddToCart(movie)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;