export const createReview = (review, toyId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/toys/${toyId}/reviews`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
            body: JSON.stringify(review)
          })
        .then(res => res.json())
        .then(toy => {
            if (toy.error) {
              alert(toy.error)
            } else {
              console.log("C")
              dispatch({type: 'CREATE_REVIEW', payload: toy})
            }
          })
      }
    }

