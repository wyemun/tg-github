import {createConstants} from '../utils'

const constants = createConstants(
  'SELECT_REPO',
  'CHANGE_QUERY',

  // Fetch related constants
  'FETCH_REPO_BEGIN',
  'FETCH_REPO_SUCCEED',
  'FETCH_REPO_FAILED'
)

export default constants
