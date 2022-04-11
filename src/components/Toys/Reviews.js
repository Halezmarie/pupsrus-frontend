import React from 'react';
import Review from './Review';

const Reviews = ({ reviews }) => (
  <>
    <h1 className="header text-center">Reviews</h1>
    {reviews &&
      reviews.map(review => (
        <Review key={ review.id } review={ review } />
      ))}
  </>
);

export default Reviews;
