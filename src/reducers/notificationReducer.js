import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (_, action) =>  {
      return action.payload
    },
    removeNotification: _ => {
      return initialState
    }
  }
})

export const { setNotification, removeNotification } = notificationSlice.actions

export const newNotification = (notification, time) => {
  return async dispatch => {
    dispatch(setNotification(notification))
    setTimeout(() => {
      dispatch(removeNotification())
    }, time)
  }
}

export default notificationSlice.reducer
