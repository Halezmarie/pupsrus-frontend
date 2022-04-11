import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import Toy from './Toy';
import { searchToysSelector } from '../../selectors/toySelectors';

const Toys = () => {
  const toys = useSelector(searchToysSelector);

  return (
    <Container fluid>
      <Row>
        { toys.map(toy => <Toy key={ `toy-${toy.id}` } toy={ toy } /> ) }
      </Row>
    </Container>
  );
}

export default Toys;
