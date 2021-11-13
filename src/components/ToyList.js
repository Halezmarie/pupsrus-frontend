import React from 'react'

// I need 5 functional components 

// rendering a list of toys

const ToyList = (props) => {

    return (
<div>
    {props.toys.map(toy => <li key={toy.id}>{toy.name} - {toy.description} -  <img src={toy.image_url}></img> </li>
        )}
</div>
    )
    // need props first because it is the info being passed from the toy container to my child component of toys
}
export default ToyList

