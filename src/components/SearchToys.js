import React, { useState } from 'react';

const Search = (props) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    props.getSearchInput(e.target.value);
  };

  return (
    <div>
      <input
        icon="search"
        placeholder="Search..."
        type="text"
        value={searchInput}
        onChange={handleSearchChange}
      />
    </div>
  );
};
export default Search;
