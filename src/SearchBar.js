import React, { useState } from 'react';
import './SearchBar.css';  // Assuming you'll style the component with a separate CSS file

const SearchBar = ({ countries }) => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  // Handle input changes
  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchInput(value);

    // Filter the countries based on the input
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(value) ||
      country.capital.toLowerCase().includes(value)
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by country name or capital..."
        value={searchInput}
        onChange={handleInputChange}
      />
      {searchInput && (
        <ul className="autocomplete-suggestions">
          {filteredCountries.map((country) => (
            <li key={country.name}>
              {country.name} - {country.capital}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
