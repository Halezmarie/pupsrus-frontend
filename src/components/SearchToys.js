const Search = (props) => {

// search and query 
  const toys = props.toys
}



// filter toys, pass in props of toys and query. 
// return the toys as a filter with the name to lowercase
return (
    <div>
    <form action='/' method='get'>
      <label htmlFor='toy-search'>Search for a toy...: </label>
      <input type='text' id='toysearch' placeholder='Name' />
      <button type="submit">Search</button>
    </form>
    </div>
  )




export default Search;