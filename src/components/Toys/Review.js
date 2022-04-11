import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import { deleteReview } from '../../actions/deleteReview';

const Review = ({ review: { id, content, rating, title, toy_id }}) => {
  const dispatch = useDispatch();

  return (
    <Card key={id}>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{rating}</Card.Text>
      <Card.Text>{content}</Card.Text>
      <Button variant="primary" onClick={() => dispatch(deleteReview(id, toy_id))}>Delete Review</Button>
    </Card>
  );
};

export default Review;
