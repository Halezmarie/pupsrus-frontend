export const createReview = (review, toyId) => {

  (async (dispatch) => {
    const result = await fetch(`http://localhost:3000/api/v1/toys/${toyId}/reviews`, {
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
       dispatch({ type: 'CREATE_REVIEW', payload: toy })
        }
      })
      return result
  })()
}






