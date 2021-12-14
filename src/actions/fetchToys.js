export function fetchToys() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/toys')
            .then(response => response.json())
            .then(toys => dispatch({
                type: 'FETCH_TOYS',
                payload: toys
            }))
    }
}

