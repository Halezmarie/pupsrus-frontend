import React from 'react';
import ReviewForm from '../components/ReviewForm';
import Reviews from '../components/Reviews';

const ReviewsContainer = ({ toy }) => {
  return (
    <div>
      <ReviewForm toy={toy} />
      <Reviews reviews={toy && toy.reviews} />
    </div>
  );
};

export default ReviewsContainer;
