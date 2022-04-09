import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteReview } from '../actions/deleteReview.js';
import { Container, Button, Card } from 'react-bootstrap';

const Reviews = ({ reviews }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <h1 className="header text-center">Reviews</h1>
      {reviews &&
        reviews.map((review) => (
          <Card key={review.id}>
            <Card.Title>{review.title}</Card.Title>
            <Card.Text>{review.rating}</Card.Text>
            <Card.Text>{review.content}</Card.Text>
            <Button variant="primary" onClick={() => dispatch(deleteReview(review.id, review.toy_id))}>Delete Review</Button>
          </Card>
        ))}
    </Container>
  );
};

export default Reviews;
