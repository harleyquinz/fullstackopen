import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Tittle = ({text}) => <h1>{text}</h1>

const Anecdote = ({anecdote, votes}) => 
{
  return (
    <div>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const Winner = ({anecdotes, votes}) => {
  const index = votes.indexOf(Math.max(...votes))
  const anecdote = anecdotes[index]

  if (votes[index] > 0) {
    return (
      <div>
        <p>{anecdote}</p>
        <p>has {votes[index]} votes</p>
      </div>
    )
  } else {
    return (
      <p>No votes yet</p>
    )
  }  
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const randomAnecdote = () => {
    const index = Math.floor(Math.random() * anecdotes.length)
    setSelected(index)
  }
  
  const incrementVotes = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  return (
    <div>
      <Tittle text="Anecdote of the day"/>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button onClick={incrementVotes} text="vote"/>
      <Button onClick={randomAnecdote} text="next anecdote"/>
      <Tittle text="Anecdote with most votes"/>
      <Winner anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App