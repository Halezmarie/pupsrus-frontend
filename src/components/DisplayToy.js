import React from 'react'

//functional not doing anything with state

const DisplayToy = (props) => {


let toy = props.toys[props.match.params.id - 1 ]

    return (
    <h1>
        <img src={toy? toy.image_url : null}/><br></br>
        {toy ? toy.name : null} : {toy ? toy.description : null} 
        
    </h1>
  
    )
}

// props.toys is holding all the toys I have in the store, but I am only wanting to display the individual toy
export default DisplayToy

// Functional component, shows a toy's info + reviews 