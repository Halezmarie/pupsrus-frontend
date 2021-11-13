// will be responsible for updating the parts of the store that deal with the toys

// reducer is a function
//the reducer will take in the state as in the previous state as the first argument and in argument action as the second inside the reducer, then I will update the reducer according to the action type.

// pass in state and then set the initial state so it is like an array, so I can have an object key pointing to an array
export default function toyReducer(state = {toys: []}, action) {

    switch (action.type) {
    case 'FETCH_TOYS':
        return {toys: action.payload} // new redux state with the data from the fetch request
    default:
        return state

    }
}