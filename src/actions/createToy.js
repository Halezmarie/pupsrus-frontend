export const createToy = (toydata, history) => {
  
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/toys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(toydata)
        })
        .then(res => res.json())
        .then(toy => {
            if (toy.error) {
              alert(toy.error)
            } else {
              dispatch({type: 'CREATE_TOY', payload: toy})
              history.push(`/toys/${toy.id}`)
            }
        })
    }}
