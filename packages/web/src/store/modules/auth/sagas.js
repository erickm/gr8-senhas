import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import history from '../../../services/history'
import api from '../../../services/api'
import { signInSuccess, signFailure } from './actions'

export function* signIn({ payload }) {
  try {
    const { email, password } = payload

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    })

    const { token, user } = response.data

    api.defaults.headers.Authorization = `Bearer ${token}`

    yield put(signInSuccess(token, user))

    history.push('/dashboard')
  } catch (e) {
    yield put(signFailure())
    toast.error('Falha a altenticação, verifique seus dados')
  }
}
export const setToken = ({ payload }) => {
  if (!payload) return

  const { token } = payload.auth
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}
export const signOut = () => {
  history.push('/')
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  // takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
])
