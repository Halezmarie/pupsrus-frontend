import React from 'react';
import ReviewForm from '../components/Toys/ReviewForm';
import Reviews from '../components/Toys/Reviews';

const ReviewsContainer = ({ toy }) => (
  <div>
    <ReviewForm toy={toy} />
    <Reviews reviews={toy?.reviews} />
  </div>
);

export default ReviewsContainer;
