export const deleteToy = (toyId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/toys/${toyId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((toyId) => {
        dispatch({ type: "DELETE_TOY", payload: toyId });
      })
      .catch((err) => alert(err));
  };
};
