export const deleteReview = (reviewId, toyId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/toys/${toyId}/reviews/${reviewId}`, {
      method: "DELETE"
    })
  .then(response => response.json())
  .then(toy => {
    if (toy.error) {
      alert(toy.error)
    } else {
      dispatch({type: 'DELETE_REVIEW', payload: toy})
    }
  })
}
}