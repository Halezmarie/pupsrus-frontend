export default function toyReducer(state = { toys: [] }, action) {

  switch (action.type) {
    case 'FETCH_TOYS':
      return { toys: action.payload }
    case 'CREATE_TOY':
      return { ...state, toys: [...state.toys, action.payload] }
    case 'CREATE_REVIEW':
      console.log("create review")
      console.log(state, action.payload)
      let toys = state.toys
      //   if (toy.id === action.payload.id) {
          return { ...state, toys: state.toys.map(toy => toy.id == action.payload.id ? action.payload : toys)}
          // return { ...state, artworks: state.artworks.map(a => a.id == action.payload.id ? action.payload : a)} 
        // }
      
      // return { ...state, toys: toys }
    case 'DELETE_REVIEW':
      let deletetoys = state.toys.map(toy => {
        if (toy.id === action.payload.id) {
          return action.payload
        } else {
          return toy
        }
      })
      return { ...state, toys: deletetoys }
      case 'DELETE_TOY':
        let DeleteToys = state.toys.filter(toy => toy.id !== action.payload.toString())
        return { ...state, toys: DeleteToys } 
    default:
      return state
  }
}