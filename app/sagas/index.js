import { takeLatest, fork, put } from 'redux-saga/effects'

import {
  APP_LOADING_STARTED,
  appLoadingSucceed,
  appLoadingFailed
} from 'app/actions'

export function* initializeAppState () {
  try {
    yield put(appLoadingSucceed())
  } catch (error) {
    yield put(appLoadingFailed())
  }
}

export function* watchInitializeAppState () {
  yield takeLatest(APP_LOADING_STARTED, initializeAppState)
}

export default function* startForeman () {
  yield fork(watchInitializeAppState)
}
