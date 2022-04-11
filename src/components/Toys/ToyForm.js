import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createToy } from '../../actions/createToy';

const ToyForm = () => {
  const dispatch = useDispatch();
  const initialFormState = {
    name: '',
    description: '',
    image_url: '',
  };

  const [form, setForm] = useState(initialFormState);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createToy(form));
    setForm(initialFormState);
  };

  const { name, description, image_url } = form;

  return (
    <Container className="w-25">
      <h1 className="header text-center">Create a New Toy 🐶🥎</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Title:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Toy name..."
          value={name}
          name="name"
          onChange={handleChange}
        />
        <Form.Label>Description:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Description of the toy..."
          value={description}
          name="description"
          onChange={handleChange}
        />
        <Form.Label>Picture:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Picture of the toy..."
          value={image_url}
          name="image_url"
          onChange={handleChange}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
export default ToyForm;
