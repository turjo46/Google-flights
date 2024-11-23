import React from 'react';

const FlightResults = ({ results }) => {
  if (!results) return null;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Flight Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map((flight, index) => (
          <div key={index} className="border p-4 rounded-md shadow-md">
            <p><strong>Airline:</strong> {flight.airline}</p>
            <p><strong>Price:</strong> ${flight.price}</p>
            <p><strong>Duration:</strong> {flight.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightResults;
