import React, { useState } from 'react';

const SearchBox = () => {
  const [searchResults, setSearchResults] = useState([]);

  const items = []

  const handleSearch = (searchTerm) => {
    const results = items.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="">
      <h1>Search Example</h1>
      <SearchBox onSearch={handleSearch} />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;
