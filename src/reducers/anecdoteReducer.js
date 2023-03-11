import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    // Note: not implemented on server side.
    vote: (state, action) => {
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)
      const newAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      const newState = state.map(a => a.id === id ? newAnecdote : a)
      return newState
    },
    newAnecdote: (state, action) => {
      const newAnecdote = action.payload
      return [...state, newAnecdote]
    },
    setAnecdotes: (_, action) => {
      const anecdotes = action.payload
      return anecdotes
    }
  }
})

export const { vote, newAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer
