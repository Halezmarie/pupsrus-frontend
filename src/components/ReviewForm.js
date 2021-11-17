import React from 'react'
import {connect} from 'react-redux'
// controlled form so I need to store values in the state

class ReviewForm extends React.Component {
    state = {
        title: '',
        rating: '',
        content: '',
      }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value

        })
    }

    handleSubmit= (event) => {
        event.preventDefault()

    }

render(){
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <br></br>
            <label> Review Title: </label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
            <br></br>
            <label> Rating: </label>
            <input type="number" name="rating" value={this.state.rating} onChange={this.handleChange}/>
            <br></br>
            <label> Review Content: </label>
            <input type="text" name="content" value={this.state.content} onChange={this.handleChange}/>
            <input type="submit"/> 
            </form>
        </div>
    )
}
}

export default connect(null, )(ReviewForm)