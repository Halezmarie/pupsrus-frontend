
import React, { useState, useEffect } from 'react'


// using a hook for the search bar


const Search = (props) => {

// search and query 
  const toys = props.toys
}

const [searchInput, setSearchInput] = useState('')

// const searchToys = (searchValue) => {
//     setSearchInput(searchValue)
// }

const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
};



return () {
    <div>
        <Input icon='search'
            placeholder='Search...'
        />
             <input type="text" value={search} onChange={handleSearchChange} />
    </div>
)}

export default Search;