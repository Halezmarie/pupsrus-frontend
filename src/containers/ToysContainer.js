import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { fetchToys } from '../actions/fetchToys'
import ToyList from '../components/ToyList'
import DisplayToy from '../components/DisplayToy'
import ToyForm from '../components/ToyForm'


const ToysContainer = () => {
  const dispatch = useDispatch();
  dispatch(fetchToys());

  const toys = useSelector((state) => state.toys);
  
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

