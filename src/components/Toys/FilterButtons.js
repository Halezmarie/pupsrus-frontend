import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import setReviewFilter from '../../actions/setReviewFilter';

const FilterButtons = () => {
  const dispatch = useDispatch();

  return (
    <div className="filterByReviews">
      <Button className="m-2" value="toy" onClick={ () => dispatch(setReviewFilter('on')) }>
        Toys with Reviews
      </Button>
      <Button className="m-2" value="toy" onClick={ () => dispatch(setReviewFilter('off')) }>
        Reset
      </Button>
    </div>
  );
}

export default FilterButtons;
