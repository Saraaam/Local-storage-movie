import React from 'react';

function MovieList({ movies }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={movie.posterURL}
            alt={movie.title}
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
          <p className="text-gray-700 mb-2">{movie.description}</p>
          <p className="text-gray-500">Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
