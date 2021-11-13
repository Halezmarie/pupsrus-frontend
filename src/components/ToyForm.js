import React from 'react'

    class ToyForm extends React.Component {
        state = {
            name: '',
            description: '',
            image_url: ''
          }
  //leaving it local 
          


    handleChange = (event) => {

        debugger;
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
               <input type='text' placeholder='Picture of the toy...' value={this.state.image_url} name="image" onChange={this.handleChange}/><br/>
               
           </form>
       </div>
        )
    }
}

export default ToyForm