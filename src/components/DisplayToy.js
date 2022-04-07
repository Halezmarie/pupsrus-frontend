import React, { useState } from 'react';
import ReviewsContainer from '../containers/ReviewsContainer';
import { Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToy } from '../actions/deleteToy.js';
import { selectToy } from '../selectors/toySelectors';

const DisplayToy = (props) => {
  const [display, setDisplay] = useState(true);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const toy = useSelector(selectToy(props.match.params.id));

  const handleDelete = (toyId) => {
    dispatch(deleteToy(toyId));
    setDisplay(false);
    setShow(true);
  };

  return (
    <Container>
      {display && (
        <div>
          <h1 className="header text-center">{toy.name}</h1>
          <img src={toy.image_url} alt="toy-image" width="300" height="300"/>
          <p>{toy.description}</p>
          <Button onClick={() => handleDelete(toy.id)}>Delete Toy</Button>
          <ReviewsContainer toy={toy}/>
        </div>
      )}
      {show && <p>Toy deleted successfully</p>}
    </Container>
  );
};

export default DisplayToy;
