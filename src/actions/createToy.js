export const createToy = (toydata) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(toydata),
    })
    .then((res) => res.json())
    .then((toy) => {
      dispatch({ type: 'CREATE_TOY', payload: toy });
    })
    .catch((err) => alert(err));
  };
};
