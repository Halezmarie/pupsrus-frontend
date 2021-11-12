// this is my action creator and what I return from this function what I dispatch is an action object. The action object will be dispatched to the reducer and then return the new version of state based on the action I sent 
// this is a thunk function, a function returning inside another function
export function fetchToys() {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/toys')
    .then(response => response.json())
    .then(data => dispatch({
        type: 'FETCH_TOYS', 
        payload: data 
    }))
    }
}
//dispatching to the reducer with a type fetch toys, payload of toys(data)


// I imported thunk because it returns a function from the action creator and you can use it in other places easily. When I want to make a synchronous request like a fetch request. I can add dispatch() on my fetch request so that the connect will allow the fetch request to finish  before I dispatch anything to the reducer (because it is impatient and wants a response ASAP). I also need thunk because we have to access the backend somehow. If I did not have a backend, thunk would not be needed. 