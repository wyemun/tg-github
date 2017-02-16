import c from '../constants'

export function searchGithub () {
  return {
    // TODO Fetch API
  }
}

export function selectRepo (id) {
  return {
    type: c.SELECT_REPO,
    payload: {id},
  }
}

export function changeQuery (searchQuery) {
  return {
    type: c.CHANGE_QUERY,
    payload: {searchQuery},
  }
}
