import React from 'react'
import './MovieCard.css'

const MovieCard = ({ title, poster_path, vote_average, overview, onClick }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className='card' onClick={onClick}>
      <div className='poster'>
        <img src={API_IMG + poster_path} alt={title} />
      </div>
      <div className='info'>
        <p className='title'>{title}</p>
        <p className='vote'>{vote_average}</p>
      </div>
      <div className='overview'>
        <h2 className='title_overview'>Overview</h2>
        <h3 className='overview_info'>{overview}</h3>
      </div>
    </div>
  );
}

export default MovieCard;