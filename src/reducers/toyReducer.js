export const initialState = {
  toys: []
};

export default function toyReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_TOYS":
      return { toys: action.payload };
    case "CREATE_TOY":
      return { ...state, toys: [...state.toys, action.payload] };
    case "CREATE_REVIEW":
      let toys = state.toys;
      return {
        ...state,
        toys: state.toys.map((toy) =>
          toy.id == action.payload.id ? action.payload : toys
        ),
      };
    case "DELETE_REVIEW":
      let deletetoys = state.toys.map((toy) => {
        if (toy.id === action.payload.id) {
          return action.payload;
        } else {
          return toy;
        }
      });
      return { ...state, toys: deletetoys };
    case "DELETE_TOY":
      let DeleteToys = state.toys.filter(
        (toy) => toy.id != action.payload.toString()
      );
      return { toys: DeleteToys };
    default:
      return state;
  }
}
