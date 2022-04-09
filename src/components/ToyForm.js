import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createToy } from '../actions/createToy';

const ToyForm = ({ toy }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    description: '',
    image_url: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createToy(form, toy));
    setForm({
      ...form,
      name: '',
      description: '',
      image_url: '',
    });
  };

  return (
    <Container className="w-25">
      <h1 className="header text-center">Create a New Toy 🐶🥎</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Title:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Toy name..."
          value={form.name}
          name="name"
          onChange={handleChange}
        />
        <Form.Label>Description:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Description of the toy..."
          value={form.description}
          name="description"
          onChange={handleChange}
        />
        <Form.Label>Picture:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Picture of the toy..."
          value={form.image_url}
          name="image_url"
          onChange={handleChange}
        />
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  );
};
export default ToyForm;
