export default function toyReducer(state = {toys: []}, action) {

    switch (action.type) {
    case 'FETCH_TOYS':
        return {toys: action.payload} 
    case 'CREATE_TOY':
        return {...state, toys: [...state.toys, action.payload]}
        case 'CREATE_REVIEW':
            let toys = state.toys.map(toy => {
                if (toy.id === action.payload.id) {
                return action.payload
            } else {
                return toy
            }
        })
        return {...state, toys: toys}
        case 'DELETE_REVIEW':
          debugger;
            let deletetoys = state.toys.map(toy => {
              console.log(toy.id)
              if (toy.id === action.payload.id) {
                return action.payload
              } else {
                return toy
              }
            })
            return {...state, toys: deletetoys}
            default:
              return state
    }
}