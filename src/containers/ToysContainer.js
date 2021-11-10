// containers render other components, pass them data (if needed) and they can have functions inside of them like callbacks, componenetdidmount (helps pass it to the right component that will render and deal with changes like a form etc) and they are usually class components as well. They are usually class components b/c they may need state/componentdidmount etc. 

import React from 'react'

// must always have a render 
class  ToysContainer extends React.Component {

    render () {

        return (

        <div>
            ToysContainer
        </div>
        )
    }
    
}

export default ToysContainer
