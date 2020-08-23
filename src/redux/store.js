import {
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit'

import { sidebarReducer } from './sidebar-slice'

const middleware = [
  ...getDefaultMiddleware()
]

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer
  },
  middleware
})

export default store
