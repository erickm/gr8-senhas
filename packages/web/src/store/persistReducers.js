import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default reducers => {
  return persistReducer(
    {
      key: 'GR8_SENHAS',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  )
}
