export const createToy = (toydata) => {
  
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/toys', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(toydata)
        })
        .then(res => res.json())
        .then(newtoy => dispatch ({type: 'NEW_TOY', payload: newtoy}))


    }
// stringify so that is sent over as the server expects it: in a string
}

// returning dispatch so I can return the function and the function is taking dispatch as an argument. I am able to do that because of THUNK. It is allowing me to pass in dispatch to the thunk function inside of the action creator 