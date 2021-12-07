import React from 'react'
import ReviewsContainer from '../containers/ReviewsContainer'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
//functional not doing anything with state

const DisplayToy = (props) => {


    let toy = props.toys.filter(toy => toy.id == props.match.params.id)[0]

    return (
        <Container>
            <h1>
                <h1> {toy ? toy.name : null}</h1>
                <img src={toy ? toy.image_url : null} alt="toyimage" width="300" height="300" /><br></br>
                <p>{toy ? toy.description : null}</p>
                <ReviewsContainer toy={toy} />
            </h1>
        </Container>

    )
}
// props.toys is holding all the toys I have in the store, but I am only wanting to display the individual toy
export default DisplayToy

// Functional component, shows a toy's info + reviews 