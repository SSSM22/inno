import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

const App = () => {
  const [countries, setCountries] = useState([]);

  // Fetch countries data from the JSON link
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://dpaste.com/79QXDY8TD');  // Replace with actual link
        const data = await response.json();
        setCountries(data.countries); // Assuming the JSON has a "countries" key
      } catch (error) {
        console.error('Error fetching the country data:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="App">
      <h1>Country Search</h1>
      <SearchBar countries={countries} />
    </div>
  );
};

export default App;
