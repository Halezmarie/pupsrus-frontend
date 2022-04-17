export const initialState = {
  toys: [],
};

export default function toyReducer(state = initialState, action) {
  let toys = [];
  switch (action.type) {
    case 'FETCH_TOYS':
      return { toys: action.payload };
    case 'CREATE_TOY':
      return { ...state, toys: [...state.toys, action.payload] };
    case 'CREATE_REVIEW':
      toys = state.toys.map(toy =>
        toy.id === action.payload.id ? action.payload : toys
      );
      return { ...state, toys };
    case 'DELETE_REVIEW':
      toys = state.toys.map(toy => toy.id === action.payload.id ? action.payload : toy);
      return { ...state, toys };
    case 'DELETE_TOY':
      toys = state.toys.filter(toy => toy.id !== action.payload);
      return { ...state, toys };
    default:
      return state;
  }
}
