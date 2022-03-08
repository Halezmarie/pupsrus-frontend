import React from 'react'
import { connect } from 'react-redux'
import { createToy } from '../actions/createToy'
import { Container } from 'react-bootstrap';

class ToyForm extends React.Component {
    state = {
        name: '',
        description: '',
        image_url: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmitButton = (event) => {
        event.preventDefault()
        this.props.createToy(this.state, this.props.history)
        this.setState({
            name: '',
            description: '',
            image_url: ''
        })
    }

    render() {
        return (
            <Container className='w-25'>
                <h1 className="header text-center">Create a New Toy! 🐶🥎
                    <br></br><br></br>
                    <form onSubmit={this.handleSubmitButton}>
                        <label>Name </label>
                        <input type='text' placeholder='Toy name...' value={this.state.name} name="name" onChange={this.handleChange} /><br />
                        <br></br>
                        <label>Description </label>
                        <input type='text' placeholder='Description of the toy...' value={this.state.description} name="description" onChange={this.handleChange} /><br /><br></br>
                        <label>Image </label>
                        <input type='text' placeholder='Picture of the toy...' value={this.state.image_url} name="image_url" onChange={this.handleChange} /><br />
                        <br></br>
                        <input type="submit" />
                    </form>
                </h1>
            </Container>
        )
    }
}

export default connect(null, { createToy })(ToyForm)

