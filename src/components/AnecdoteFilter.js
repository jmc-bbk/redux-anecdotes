import { useDispatch } from 'react-redux'

const AnecdoteFilter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    console.log(event.target.value)
    dispatch({type: 'SET_FILTER', payload: { filter: event.target.value }})
  }
  return (
    <div style={{marginBottom: 10}}>
      Filter:
      <input onChange={handleChange}/>
    </div>
  )
}

export default AnecdoteFilter
