import {useEffect, useState } from 'react'
import'./App.css';
import MovieCard from './MovieCard';
import MovieDetail from './MovieDetail';
import CartIcon from './CartIcon';
import CartModal from './CartModal';

function App() {
  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=fa1192549721df01a1fb28a7788e6608";
  const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=fa1192549721df01a1fb28a7788e6608&query=";

  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error fetching popular movies:', error));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(API_SEARCH + term)
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error fetching search results:', error));
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetail = () => {
    setSelectedMovie(null);
  };

  const handleAddToCart = (movie) => {
    if (!cart.some(item => item.id === movie.id)) {
      setCart([...cart, movie]);
    }
  };

  const handleCartIconClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleRemoveFromCart = (movieId) => {
    setCart(cart.filter(movie => movie.id !== movieId));
  };

  return (
    <div className='App'>
      <div className='search_nav'>
        <div className='title'>
          <h1>Movies</h1>
        </div>

        <div className='search_box'>
          <form onSubmit={handleSearch}>
            <input onChange={(e) => setTerm(e.target.value)} />
            <button>Search</button>
          </form>
        </div>
      </div>
      <div className='movies'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} onClick={() => handleMovieClick(movie)} />
        ))}
      </div>
      {selectedMovie && (
        <MovieDetail 
          movie={selectedMovie} 
          onClose={handleCloseDetail} 
          onAddToCart={handleAddToCart} 
        />
      )}
      <CartIcon onClick={handleCartIconClick} itemCount={cart.length} />
      {isCartOpen && (
        <CartModal cart={cart} onClose={handleCartIconClick} onRemove={handleRemoveFromCart} />
      )}
    </div>
  );
}

export default App;