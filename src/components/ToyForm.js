import React from 'react'

    class ToyForm extends React.Component {


    render() {
        return (
       <div>
           <form>
               <label>Name: </label>
               <input type='text' placeholder='Toy name...' /><br/>
               <label>Description </label>
               <input type='text' placeholder='Description of the toy...' /><br/>
               <label>Image </label>
               <input type='text' placeholder='Picture of the toy...' /><br/>
               
           </form>
       </div>
        )
    }
}

export default ToyForm