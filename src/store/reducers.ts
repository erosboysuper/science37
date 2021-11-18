import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { combineReducers } from 'redux'
import { searchReducer } from './search/reducer'

const createRootReducer = (history: History<any>) =>
  combineReducers({ router: connectRouter(history), searchReducer })

export default createRootReducer
