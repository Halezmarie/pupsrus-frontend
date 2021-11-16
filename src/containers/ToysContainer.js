// containers render other components, pass them data (if needed) and they can have functions inside of them like callbacks, componenetdidmount (helps pass it to the right component that will render and deal with changes like a form etc) and they are usually class components as well. They are usually class components b/c they may need state/componentdidmount etc. 

import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import { fetchToys } from '../actions/fetchToys'
import ToyList from '../components/ToyList'
import ToyForm from '../components/ToyForm'
import DisplayToy from '../components/DisplayToy'

// must always have a render 
class  ToysContainer extends React.Component {

    // need to add it to the connect to have access to fetchToys with props
    // fetch the toys, without this nothing can be accessed 
    //everytime it triggers it will activate ^
    componentDidMount(){
        this.props.fetchToys()
    }


    //  in order for the routes to haccess to the props that they need my routes (need to be in a component) that can send the props through the route to the components 
    render () {

        return (

        <div>
            <Switch>
            <Route path='/toys/new' component={ToyForm}/>
            <Route path='/toys/:id' render={(routerProps) => <DisplayToy {...routerProps} toys={this.props.toys}/>}/>
            <Route exact path='/toys' render={(routerProps) => <DisplayToy {...routerProps} toys={this.props.toys}/>}/>
            </Switch>
        </div>
        )
    }   
}

// to see it 
// needs access to toys from our store though props... use componentdidmount, fetch 
//getting the props here for our redux store and then we are accessing them through the props from the component ^ and then accessing them through <ToyForm toys={this.props.toys}/>
const mapStateToProps = state => {
    return {
        toys: state.toys
    }

}

export default connect(mapStateToProps, {fetchToys}) (ToysContainer)
// calling on fetchToys which takes us to the fetch request, nothing would happen w/o it