import React from 'react'
import ReviewsContainer from '../containers/ReviewsContainer'
import { Container, Button } from 'react-bootstrap'
import {connect} from 'react-redux'
import {deleteToy} from '../actions/deleteToy.js';

const DisplayToy = (props) => {
    
    let toy = props.toys.filter(toy => toy.id == props.match.params.id)[0]
    if (!toy) return null
    let toyInfo = (toy &&toy[0])

    const handleDelete = (toyInfo) => {
        props.deleteToy(toyInfo, props.history)
      }

    return (
        <Container>
            <h1>
                <h1> {toy.name}</h1>
                <img src={toy.image_url} alt="toyimage" width="300" height="300" /><br></br>
                <p>{toy.description}</p>
                <Button onClick={() => handleDelete(toyInfo)}>Delete Toy</Button>
                <ReviewsContainer toy={toy} />
            </h1>
        </Container>
    )
}
export default connect(null, {deleteToy})(DisplayToy);

