import React from 'react'
import ReviewsContainer from '../containers/ReviewsContainer'
//functional not doing anything with state

const DisplayToy = (props) => {

let toy = props.toys.filter(toy => toy.id == props.match.params.id)[0]

    return (
    <div>
    <h1>
        <img src={toy? toy.image_url : null} alt="toyimage" width="300" height="300"/><br></br>
        {toy ? toy.name : null} : {toy ? toy.description : null} 
        <ReviewsContainer toy={toy}/>
    </h1>
    </div>
    )
}

// props.toys is holding all the toys I have in the store, but I am only wanting to display the individual toy
export default DisplayToy

// Functional component, shows a toy's info + reviews 