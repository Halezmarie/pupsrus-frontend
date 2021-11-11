// containers render other components, pass them data (if needed) and they can have functions inside of them like callbacks, componenetdidmount (helps pass it to the right component that will render and deal with changes like a form etc) and they are usually class components as well. They are usually class components b/c they may need state/componentdidmount etc. 

import React from 'react'
import {connect} from 'react-redux'
import { fetchToys } from '../actions/fetchToys'
import ToyList from '../components/ToyList'
import ToyForm from '../components/ToyForm'

// must always have a render 
class  ToysContainer extends React.Component {

    // need to add it to the connect to have access to fetchToys with props
    componentDidMount(){
        this.props.fetchToys()

    }

    render () {

        return (

        <div>
            <ToyList/>
             <ToyForm/>
        </div>
        )
    }   
}

// to see it 
// needs access to toys from our store though props... use componentdidmount, fetch 
const mapStateToProps = state => {
    return {
        toys: state.toys
    }

}

export default connect(mapStateToProps, {fetchToys}) (ToysContainer)
