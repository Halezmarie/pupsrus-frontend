import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createReview } from '../../actions/createReview';

const ReviewForm = ({ toy }) => {
  const dispatch = useDispatch();
  const initFormState = { title: '', rating: '', content: ''};

  const [form, setForm] = useState(initFormState);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createReview(form, toy.id));
    setForm(initFormState);
  };

  return (
    <Container>
      <h1 className="header text-center">Create a Review</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Title:</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <Form.Label>Rating:</Form.Label>
        <Form.Control
          type="number"
          name="rating"
          min="0"
          max="10"
          value={form.rating}
          onChange={handleChange}
        />
        <Form.Label>Content:</Form.Label>
        <Form.Control
          as="textarea"
          name="content"
          value={form.content}
          onChange={handleChange}
          style={{ height: '100px' }}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ReviewForm;
