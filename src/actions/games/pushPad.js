import API from '../../api'
import {
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

const api = new API()
export const PAD_PUSHED = 'PAD_PUSHED'

export default (gameId, pad) => {
  return (dispatch) => {
    const backend = api.service('games')
    api.app.authenticate()
      .then(() => {
        backend.patch(gameId, { pad: pad })
        .then(() => {
          dispatch({
            type: PAD_PUSHED,
            payload: pad
          })
        })
        .catch((error) => {
          dispatch({
            type: LOAD_ERROR,
            payload: error.message
          })
        })
      })
      .catch((error) => {
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
