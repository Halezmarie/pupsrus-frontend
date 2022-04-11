import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOptions } from '../../selectors/optionsSelector';
import setSearchInput from '../../actions/setSearchInput';

const EMPTY_STRING = '';

const Search = () => {
  const dispatch = useDispatch();
  const { searchInput } = useSelector(selectOptions);

  return (
    <div className="search">
      <input
        icon="search"
        placeholder="Search..."
        type="text"
        value={ searchInput }
        onChange={ (e) => dispatch(setSearchInput(e.target.value)) }
      />
      <button type="reset" onClick={ () => dispatch(setSearchInput(EMPTY_STRING)) }>
        &times;
      </button>
    </div>
  );
};
export default Search;
