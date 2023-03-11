import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const { data } = await axios.get(baseUrl)
  return data
}

const createNew = async (content) => {
  const { data } = await axios.post(baseUrl, {content, votes: 0})
  return data
}

// Note. It's not ideal to use votes from client-side to update votes on
// server-side. However, as we do not have a true backend server, this is
// preferable to making two requests for our needs.
const vote = async (anecdote) => {
  const { data } = await axios.put(
    `${baseUrl}/${anecdote.id}`,
    {...anecdote, votes: anecdote.votes + 1}
  )
  return data
}

export default { getAll, createNew, vote }
