const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      const { filter } = action.payload
      return filter
    default:
      return state
  }
}

export default filterReducer
