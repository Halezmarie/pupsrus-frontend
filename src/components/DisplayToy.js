import React from 'react';
import ReviewsContainer from '../containers/ReviewsContainer';
import { Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToy } from '../actions/deleteToy.js';
import { selectToy } from '../selectors/toySelectors';
import { useHistory } from 'react-router';

const DisplayToy = (props) => {
  const dispatch = useDispatch();

  const toy = useSelector(selectToy(props.match.params.id));

  const history = useHistory();

  const handleDelete = (toyId) => {
    dispatch(deleteToy(toyId, history));
  };

  return (
    <Container>
      <div>
        <h1 className="header text-center">{toy.name}</h1>
        <img src={toy.imageUrl} alt="toy-image" width="300" height="300" />
        <p>{toy.description}</p>
        <Button onClick={() => handleDelete(toy.id)}>Delete Toy</Button>
        <ReviewsContainer toy={toy} />
      </div>
      )
    </Container>
  );
};

export default DisplayToy;
