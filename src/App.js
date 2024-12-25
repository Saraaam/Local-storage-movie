import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieForm from './components/MovieForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
  // Step 1: Load movies from localStorage or use an empty array if no data exists
  const loadMoviesFromLocalStorage = () => {
    const savedMovies = localStorage.getItem('movies');
    if (savedMovies) {
      return JSON.parse(savedMovies); // Parse the stringified array into a JavaScript object
    }
    return []; // Return an empty array if no movies are saved in localStorage
  };

  // Initialize state with the loaded movies from localStorage
  const [movies, setMovies] = useState(loadMoviesFromLocalStorage);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  // Step 2: Save the movies to localStorage whenever the movies state changes
  useEffect(() => {
    if (Array.isArray(movies)) {
      localStorage.setItem('movies', JSON.stringify(movies)); // Save to localStorage
    }
  }, [movies]);

  const addMovie = (movie) => {
    const newMovie = { ...movie, id: uuidv4() };
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (ratingFilter ? movie.rating >= ratingFilter : true)
    );
  });

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-8">My Movie App</h1>

      {/* Filter Component */}
      <Filter
        onTitleFilterChange={(value) => setTitleFilter(value)}
        onRatingFilterChange={(value) => setRatingFilter(value)}
      />

      {/* Add Movie Form */}
      <MovieForm onAddMovie={addMovie} />

      {/* Movie List */}
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
