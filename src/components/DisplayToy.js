import React from 'react';
import ReviewsContainer from '../containers/ReviewsContainer';
import { Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToy } from '../actions/deleteToy.js';
import { selectToy } from '../selectors/toySelectors';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';

const DisplayToy = () => {
  const dispatch = useDispatch();
  const {id} = useParams();

  const toy = useSelector(selectToy(id));

  const history = useHistory();

  return (
    <Container>
      <div>
        <h1 className="header text-center">{toy.name}</h1>
        <img src={toy.image_url} alt="toy-image" width="300" height="300" />
        <p>{toy.description}</p>
        <Button onClick={() => dispatch(deleteToy(toy.id, history))}>
          Delete Toy
        </Button>
        <ReviewsContainer toy={toy} />
      </div>
    </Container>
  );
};

export default DisplayToy;
