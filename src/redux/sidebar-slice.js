import { createSlice } from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isToggled: true
  },
  reducers: {
    toggle: (state, action) => {
      state.isToggled = !state.isToggled
    }
  }
})

export const {
  toggle: toggleSidebarActionCreator
} = sidebarSlice.actions

export const sidebarReducer = sidebarSlice.reducer
