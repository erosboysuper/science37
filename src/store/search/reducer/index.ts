import {
  SET_SEARCH
} from '../actions'
import { SearchTypes } from '../actions/types'

interface IAuthInitState {
  search: any
}

const initAuthState: IAuthInitState = {
  search: null
}

export const searchReducer = (state = initAuthState, action: SearchTypes) => {
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, search: action }
    default:
      return state
  }
}
