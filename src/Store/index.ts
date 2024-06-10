import { configureStore } from '@reduxjs/toolkit'

import playerReducer from './Slices/PlayerSlice'

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
})
