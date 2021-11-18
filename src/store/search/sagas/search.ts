import { call, cancel, fork, put, take } from 'redux-saga/effects'
import { history } from '../..'
import api from '../../../apis/api'
import { logger } from '../../../utils/logger'
import {
  GET_SEARCH,
  SET_SEARCH
} from '../actions'

export function* searchInFlow() :any {
  while (true) {
    const searchInAction= yield take([
      GET_SEARCH,
    ])

    let signInTask
    let OAuthAction
    switch (searchInAction.type) {
      case GET_SEARCH:
        signInTask = yield fork(
          searchTweet,
        )
        break
    }

    const actions = yield take([
      SET_SEARCH,
    ])
    switch (actions.type) {
      case SET_SEARCH:
        // Yield init()
        break
    }
  }
}


function* searchTweet() {
  // Call sign in API
}
