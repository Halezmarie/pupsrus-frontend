import React from 'react'

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
    


    render() {
        return (
       <div>
           <form>
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

export default ToyForm