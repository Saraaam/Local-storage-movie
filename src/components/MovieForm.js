import React, { useState } from 'react';

function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the rating is between 0 and 10
    if (rating < 0 || rating > 10) {
      alert('Rating must be between 0 and 10.');
      return;
    }

    // Add movie if all fields are filled
    if (title && description && posterURL && rating) {
      onAddMovie({ title, description, posterURL, rating: parseFloat(rating) });
      // Reset form after submission
      setTitle('');
      setDescription('');
      setPosterURL('');
      setRating('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 w-full max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Add a New Movie</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Poster URL"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <input
          type="number"
          placeholder="Rating (0-10)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="0"
          max="10"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-900 focus:outline-none"
      >
        Add Movie
      </button>
    </form>
  );
}

export default MovieForm;
