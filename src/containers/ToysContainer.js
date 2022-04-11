import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchToys } from '../actions/fetchToys';
import ToyList from '../components/ToyList';
import DisplayToy from '../components/DisplayToy';
import ToyForm from '../components/ToyForm';

const ToysContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToys());
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/toys/new" render={() => <ToyForm />} />
        <Route path="/toys/:id" render={() => <DisplayToy />} />
        <Route
          path="/toys"
          render={(routerProps) => <ToyList {...routerProps} />}
        />
      </Switch>
    </div>
  );
};

export default ToysContainer;
