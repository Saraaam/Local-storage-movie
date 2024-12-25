import React from "react";

function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-sm m-4">
      <img
        src={posterURL}
        alt={title}
        className="w-full h-60 object-cover rounded-t-lg mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-yellow-500 font-semibold">Rating: {rating}</p>
    </div>
  );
}

export default MovieCard;
