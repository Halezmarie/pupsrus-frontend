import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { fetchToys } from '../actions/fetchToys'
import ToyList from '../components/ToyList'
import DisplayToy from '../components/DisplayToy'
import ToyForm from '../components/ToyForm'


//By implementing useDispatch, we are able to dispatch any action to the redux store by adding an action as an argument to the new variable
const ToysContainer = () => {
  const dispatch = useDispatch();
  dispatch(fetchToys());

  const toys = useSelector((state) => state.toys);

  // takes the current state as an argument and returns the data you want to retrieve from it. But wait, there’s more! 
  //This crafty little hook also lets you store the return values inside a variable within the scope of the functional components instead of 
  //having to pass it down as props. So instead of using mapStateToProps, we will be implementing this neat hook instead!
  
  return(
    <div>
      <Switch>
          <Route path='/toys/new' render={(routeProps) => <ToyForm {...routeProps} toys={toys} />}/>
          <Route path='/toys/:id' render={(routeProps) => <DisplayToy {...routeProps} toys={toys}/>}/>
          <Route path='/toys' render={(routerProps) => <ToyList {...routerProps} toys={toys} />}/>
      </Switch>
    </div>
  );
};

export default connect()(ToysContainer);
