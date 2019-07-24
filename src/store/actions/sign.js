import * as type from '../actionTypes'
export function login(state) {
  return {
    type: type.LOGIN_START,
    payload: {
      state
    }
  }
}