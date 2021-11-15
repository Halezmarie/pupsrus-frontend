import React from 'react'
import DisplayToy from './DisplayToy'

// I need 5 functional components 

// rendering a list of toys

const ToyList = (props) => {

    // iterating over my data and making a list to display to the user
    return (
<div>
    {props.toys.map(toy => 
    <div key={toy.id}><DisplayToy toy={toy}/></div> )}
</div>
    )
    // need props first because it is the info being passed from the toy container to my child component of toys
}
export default ToyList

