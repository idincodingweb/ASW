import React from 'react';
import '../css/Search.css';

function SearchBar({ searchKeyword, setSearchKeyword }) {
  return (
    <input
      type="text"
      className="search-bar me-2"
      placeholder="Cari cerita"
      value={searchKeyword}
      onChange={(e) => setSearchKeyword(e.target.value)}
    />
  );
}

export default SearchBar;
