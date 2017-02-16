import { createReducer } from '../utils'
// import c from '../constants'

const initialState = {
  selectedId: null,
  searchQuery: undefined,
  results: [],
}

export default createReducer(initialState, {
// [c.CONSTANT] : (state, {name}) => (
//   {
//     ...state,
//     items: [...state.results, createTask(name)]
//   }
// ),
})
