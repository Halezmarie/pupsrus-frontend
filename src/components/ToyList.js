import React from 'react'
import {Link} from 'react-router-dom'


// I need 5 functional components 

// rendering a list of toys

const ToyList = (props) => {

    

    // iterating over my data and making a list to display to the user
    return (
        <div>
          {props.toys.map(toy =>
            <li key={toy.id}>
              <Link to={`/toys/${toy.id}`}>{toy.name} -  <img src={toy.image_url}/></Link>
            </li> )}
        </div>
    
      )
    }
// need props first because it is the info being passed from the toy container to my child component of toys

export default ToyList

