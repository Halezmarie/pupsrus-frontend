import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import setSortDirection from '../../actions/setSortDirection';

const SortButtons = () => {
  const dispatch = useDispatch();

  return (
    <div className="alphabeticalDiv">
      <Button className="m-2" value="toy" onClick={ () => dispatch(setSortDirection('forward')) }>
        Toys A-Z
      </Button>
      <Button
        className="m-2"
        value="toy"
        onClick={ () => dispatch(setSortDirection('backward')) }
      >
        Toys Z-A
      </Button>
    </div>
  );
}

export default SortButtons;
