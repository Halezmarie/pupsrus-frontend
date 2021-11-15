import React from 'react'

//functional not doing anything with state

const DisplayToy = (props) => {


    return (
    <div>
  {props.toy.name} - {props.toy.description} - {props.toy.description} -  <img src={props.toy.image_url}></img>
  </div>
  
    )
}

// props.toys is holding all the toys I have in the store, but I am only wanting to display the individual toy
export default DisplayToy

// Functional component, shows a toy's info + reviews 