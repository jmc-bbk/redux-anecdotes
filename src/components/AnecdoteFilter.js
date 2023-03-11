import { setFilter } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const AnecdoteFilter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    console.log(event.target.value)
    dispatch(setFilter(event.target.value))
  }
  return (
    <div style={{marginBottom: 10}}>
      Filter:
      <input onChange={handleChange}/>
    </div>
  )
}

export default AnecdoteFilter
