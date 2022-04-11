import React from 'react';
import ReviewForm from '../components/ReviewForm';
import Reviews from '../components/Reviews';

const ReviewsContainer = ({ toy }) => (
  <div>
    <ReviewForm toy={toy} />
    <Reviews reviews={toy?.reviews} />
  </div>
);

export default ReviewsContainer;
