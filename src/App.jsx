import React, { useState } from 'react';

import { fetchFlights } from './Component/options';
import Navbar from './Component/Navbar';
import SearchBar from './Component/SearchBar.';
import FlightResults from './Component/FlightResults';
import axios from 'axios';

const App = () => {
  const [results, setResults] = useState(null);

  const handleSearch = async (searchParams) => {
    const data = await fetchFlights(searchParams);
    setResults(data);
  };

  return (
    <div className="font-sans">
      <Navbar/>
      <SearchBar onSearch={handleSearch} />
      <FlightResults results={results} />
      

    </div>
  );
};

export default App;
