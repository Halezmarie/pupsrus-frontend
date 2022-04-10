import React, {useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchToys } from "../actions/fetchToys";
import ToyList from "../components/ToyList";
import DisplayToy from "../components/DisplayToy";
import ToyForm from "../components/ToyForm";
import { selectToys } from '../selectors/toySelectors';

const ToysContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToys());
  }, [])

  const toys = useSelector(selectToys);

  return (
    <div>
      <Switch>
        <Route
          path="/toys/new"
          render={(routeProps) => <ToyForm {...routeProps} toys={toys} />}
        />
        <Route
          path="/toys/:id"
          render={(routeProps) => <DisplayToy {...routeProps}  />}
        />
        <Route
          path="/toys"
          render={(routerProps) => <ToyList {...routerProps} toys={toys} />}
        />
      </Switch>
    </div>
  );
};

export default ToysContainer;
