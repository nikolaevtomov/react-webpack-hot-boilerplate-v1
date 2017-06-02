
import { typeValueAction } from 'app/utils'
/*
 * App actions
 */
export const APP_LOADING = 'APP_LOADING'
export const appLoading = typeValueAction(APP_LOADING)

export const APP_LOADING_STARTED = 'APP_LOADING_STARTED'
export const appLoadingStarted = typeValueAction(APP_LOADING_STARTED)

export const APP_LOADING_FAILED = 'APP_LOADING_FAILED'
export const appLoadingFailed = typeValueAction(APP_LOADING_FAILED)

export const APP_LOADING_SUCCEED = 'APP_LOADING_SUCCEED'
export const appLoadingSucceed = typeValueAction(APP_LOADING_SUCCEED)
