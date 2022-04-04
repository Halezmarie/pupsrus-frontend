
import React from 'react'


// using a hook for the search bar



const [searchInput, setSearchInput] = useState('')

const searchToys = (searchValue) => {
    setSearchInput(searchValue)
}


<Input icon='search'
                placeholder='Search...'
                onChange={(e) => searchToys(e.target.value)}
            />


export default Search;

// const Search = (props) => {

// // search and query 
//   const toys = props.toys
// }



// // filter toys, pass in props of toys and query. 

// const filterToys = ((toys, query) => {
//   constToyName = toy.attributes.name.toLowerCase()
//   return toyName.includes(query)
// })

// const filteredToys = filterToys(toys, query)
// // return the toys as a filter with the name to lowercase
// return (
//     <div>
//     <form action='/' method='get'>
//       <label htmlFor='toy-search'>Search for a toy...: </label>
//       <input type='text' id='toy-search' placeholder='Name' />
//       <button type="submit">Search</button>
//     </form>
//     </div>
//   )

// export default Search;