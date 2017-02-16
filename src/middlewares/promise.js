import { checkHttpStatus, parseJSON } from '../utils'

export default function promiseMiddleware () {
  return (next) => {
    return (action) => {
      const { promise, types, ...rest } = action

      if (!promise) {
        return next(action)
      }

      const [BEGIN, SUCCESS, FAILURE] = types

      next({ ...rest, type: BEGIN })

      return promise
      .then(checkHttpStatus)
      .then(parseJSON)
        .then(
          (response) => next({ ...rest, payload: {...rest.payload, ...response}, type: SUCCESS }),
          (error) => {
            return next({ ...rest, payload: {...rest.payload, ...error}, type: FAILURE })
          }
        )
    }
  }
}
