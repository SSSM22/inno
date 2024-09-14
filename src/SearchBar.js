// src/SearchBar.js
import React, { useState, useEffect } from 'react';
import countriesData from './aa.json'; // Import the JSON data
import './SearchBar.css'; // For custom styles

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.trim() === '') {
      setSuggestions([]);
      return;
    }

    setLoading(true);

    // Debugging: Check the query and data
    console.log('Search query:', query);
    console.log('Data length:', countriesData.length);

    // Filter countries based on query
    const filtered = countriesData.filter(country =>
      country.country.toLowerCase().includes(query.toLowerCase()) ||
      country.capital.toLowerCase().includes(query.toLowerCase())
    );

    // Debugging: Check the filtered results
    console.log('Filtered results:', filtered);

    setSuggestions(filtered);
    setLoading(false);
  }, [query]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by country name or capital"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <div className="loading">Loading...</div>}
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((country, index) => (
            <li key={index}>
              {country.country} - {country.capital}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;