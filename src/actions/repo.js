import c from '../constants'

export function searchGithub () {
  return (dispatch, state) => {
    const {repos: {searchQuery}} = state

    dispatch({
      types: [c.FETCH_REPO_BEGIN, c.FETCH_REPO_SUCCEED, c.FETCH_REPO_FAILED],
      promise: fetch(`https://api.github.com/search/repositories?q=${searchQuery}`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }),
    })
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
