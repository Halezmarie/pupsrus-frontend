import React from 'react'
import {connect} from 'react-redux'
import {createToy} from '../actions/createToy'

    class ToyForm extends React.Component {
        state = {
            name: '',
            description: '',
            image_url: ''
          }
  //leaving it local 
          

    // the event target is being changed based on the user input
    // brackets because it is an object and it needs to show it's a key 
    // [] basically reads the value that is associated with and then sets it as a key
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    // data needs to go to my database with each submit from the user
    // when there is a change I am updating my state, my state will be getting sent to createToy.js as the argument. Data will be coming from  ^ the state 
    handleSubmitButton = (event) => {
        event.preventDefault()
        this.props.createToy(this.state, this.props.history)
        this.setState({
            name: '',
            description: '',
            image_url: ''
        })
    }
// have to send the state back as empty strings so the value is blank after the user enters something
// setState is asynchronous


    render() {
        return (
       <div>
           <form onSubmit={this.handleSubmitButton}>
               <label>Name: </label>
               <input type='text' placeholder='Toy name...' value={this.state.name} name="name" onChange={this.handleChange} /><br/>
               <label>Description </label>
               <input type='text' placeholder='Description of the toy...' value={this.state.description} name="description" onChange={this.handleChange} /><br/>
               <label>Image </label>
               <input type='text' placeholder='Picture of the toy...' value={this.state.image_url} name="image_url" onChange={this.handleChange}/><br/>
               <input type="submit"/>
           </form>
       </div>
        )
    }
}

export default connect(null, {createToy})(ToyForm)
// directly importing it b/c I have thunk I can call the dispatch etc
//  creating the data that is sent to the backend and then update the redux store
// adding something NEW to the store, I dont need maptostateprops so it is NULL