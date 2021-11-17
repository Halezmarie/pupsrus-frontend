import React from 'react'
import {connect} from 'react-redux'
// controlled form so I need to store values in the state

class ReviewForm extends React.Component {
    state = {
        title: '',
        rating: '',
        content: '',
      }

    

render(){

    return (

        <div>
            <form>
            <br></br>
            <label> Review Title: </label>
            <input type="text"/>
            <br></br>
            <label> Rating: </label>
            <input type="number" maxlength="10"/>
            <br></br>
            <label> Review Content: </label>
            <input type="text"/>
            </form>
        </div>
    )
}
}

export default connect(null, )(ReviewForm)