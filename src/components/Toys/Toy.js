import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';

const Toy = ({ toy: { id, name, image_url }}) => (
  <Col key={id}>
    <Card style={{ width: '17rem' }} className="text-center">
      <Link to={`/toys/${id}`}>
        {name}
        <Card.Img
          variant="top"
          src={image_url}
          alt="toy-image"
          width="300"
          height="300"
        />
      </Link>
    </Card>
  </Col>
);

export default Toy;
