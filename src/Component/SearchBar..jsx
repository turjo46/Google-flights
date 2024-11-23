import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ origin, destination, date, passengers });
  };

  return (
    <form className="flex flex-col md:flex-row gap-4 p-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Origin"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        className="border p-2 rounded-md w-full"
        required
      />
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="border p-2 rounded-md w-full"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 rounded-md w-full"
        required
      />
      <input
        type="number"
        value={passengers}
        onChange={(e) => setPassengers(e.target.value)}
        min="1"
        className="border p-2 rounded-md w-full"
        required
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded-md w-full">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
