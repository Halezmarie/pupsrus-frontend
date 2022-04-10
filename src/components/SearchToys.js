import React from 'react';

const Search = ({ searchInput, setSearchInput }) => {

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClear = () => {
    setSearchInput('');    
  };

  return (
    <div className='search'>
      <input
        icon="search"
        placeholder="Search..."
        type="text"
        value={searchInput}
        onChange={handleSearchChange}
      />
      <button type="reset" onClick={handleClear}>&times;</button>
    </div>
  );
};
export default Search;
