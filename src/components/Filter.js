import React from "react";
import { FaSearch } from 'react-icons/fa';

function Filter({ onTitleFilterChange, onRatingFilterChange }) {
  return (
    <div className="flex justify-center mb-6 space-x-4">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search by title"
          onChange={(e) => onTitleFilterChange(e.target.value)}
          className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
        />
        <FaSearch />
      </div>
      <input
        type="number"
        placeholder="Filter by rating"
        min="0"
        max="10"
        onChange={(e) => onRatingFilterChange(e.target.value)}
        className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
      />
    </div>
  );
}

export default Filter;
