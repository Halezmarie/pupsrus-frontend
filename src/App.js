import React from 'react';
import {connect} from 'react-redux'
import ToysContainer from './containers/ToysContainer'

// since I did export default I need fetchToys in curly brackets

class App extends React.Component {


  render() {
    return(
      <div className="App">
        <ToysContainer/>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     toys: state.toys
//   }

// }

export default connect()(App);
// connect is calling store.dispatch({type: 'FETCH_TOYS', payload: {name: 'Biscotto Toy'}}) passed in an action, then goes to fetchToys.js and is expecting a return action object. It is expecting that because once that is returned from there it is then (by the connect) is dispatched to the store which is then sent into our toyReducer.js as action. 