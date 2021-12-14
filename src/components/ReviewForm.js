import React from 'react'
import { connect } from 'react-redux'
import { createReview } from '../actions/createReview'

class ReviewForm extends React.Component {
    state = {
        title: '',
        rating: '',
        content: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createReview(this.state, this.props.toy.id)
        this.setState({
            title: '',
            rating: '',
            content: ''
        })
        console.log("A")
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <br></br>
                    <text> Add a review for this product: </text>
                    <br></br><br></br>
                    <label> Review Title: </label>
                    <input type="text" name="title" onChange={this.handleChange} />
                    <br></br><br></br>
                    <label> Rating: </label>
                    <input type="number" name="rating" min="0" max="10" value={this.state.rating} onChange={this.handleChange} />
                    <br></br><br></br>
                    <label> Review Content: </label>
                    <input type="text" name="content" value={this.state.content} onChange={this.handleChange} />
                    <br></br><br></br>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
export default connect(null, { createReview })(ReviewForm)
