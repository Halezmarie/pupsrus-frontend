import React from 'react'

    class ToyForm extends React.Component {
        state = {
            name: '',
            description: '',
            image_url: ''
          }
  //leaving it local 
  
    render() {
        return (
       <div>
           <form>
               <label>Name: </label>
               <input type='text' placeholder='Toy name...' value={this.state.name} /><br/>
               <label>Description </label>
               <input type='text' placeholder='Description of the toy...' value={this.state.description} /><br/>
               <label>Image </label>
               <input type='text' placeholder='Picture of the toy...' value={this.state.image_url} /><br/>
               
           </form>
       </div>
        )
    }
}

export default ToyForm