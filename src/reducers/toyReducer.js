export const initialState = {
  toys: [],
  options: {
    searchInput: '',
    reviewFilter: 'off',
    sortDirection: 'forward'
  }
};

export default function toyReducer(state = initialState, action) {
  let toys = [];
  switch (action.type) {
    case 'FETCH_TOYS':
      return { ...state, toys: action.payload };
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
    case 'SET_REVIEW_FILTER':
      return { ...state, options: { ...state.options, reviewFilter: action.payload }};
    case 'SET_SEARCH_INPUT':
      return { ...state, options: { ...state.options, searchInput: action.payload }};
    case 'SET_SORT_DIRECTION':
      return { ...state, options: { ...state.options, sortDirection: action.payload }};
    default:
      return state;
  }
}
