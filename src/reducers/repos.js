import { createReducer } from '../utils'
import c from '../constants'

const initialState = {
  selectedId: null,
  searchQuery: undefined,
  results: [],

  // fetching states
  isFetching: false,
  hasFetched: false,
}

export default createReducer(initialState, {
  [c.SELECT_REPO]: (state, {id}) => (
    {
      ...state,
      selectedId: id,
    }
  ),

  [c.CHANGE_QUERY]: (state, {searchQuery}) => (
    {
      ...state,
      searchQuery,
    }
  ),

  [c.FETCH_REPO_BEGIN]: (state) => (
    {
      ...state,
      isFetching: true,
      hasFetched: false,
      results: [], // reset store
      selectedId: null,
    }
  ),

  [c.FETCH_REPO_SUCCEED]: (state, {total_count, items}) => (
    {
      ...state,
      isFetching: false,
      hasFetched: true,
      results: items.map(mapRawItems),
    }
  ),

  [c.FETCH_REPO_FAILED]: (state, {total_count, items}) => (
    {
      ...state,
      isFetching: false,
      hasFetched: false,
    }
  ),

})

const mapRawItems = (item, index) => ({
  id: item.id,
  title: item.full_name,
  description: item.description,
  language: item.language,
  url: item.html_url,
  watcherCount: item.watchers_count,
  stargazerCount: item.stargazers_count,
})
