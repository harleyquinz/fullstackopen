import { useState } from 'react'


const Header = ({name}) => <h1>{name}</h1>

const Buttons = ({description, onClick}) => <button onClick={onClick}>{description}</button>

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({clicks}) => {

  const total = clicks.good + clicks.neutral + clicks.bad
  const average = (clicks.good * 1 + clicks.bad * -1) / total
  const positive = clicks.good * (100/total)

  if ( total === 0 ){
    return (
        <div>
          No feedback given
        </div>
      )
  } else {
    return (
      <div>
          <table>
            <tbody>
              <StatisticLine text="good" value={clicks.good} />
              <StatisticLine text="neutral" value={clicks.neutral} />
              <StatisticLine text="bad" value={clicks.bad} />
              <StatisticLine text="all" value={total} />
              <StatisticLine text="average" value={average} />
              <StatisticLine text="positive" value={positive} />
            </tbody>
          </table>
      </div>
  )
  } 
}

const App = () => {

  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const onGoodClick = () => {
    const newClicks = { ...clicks, good: clicks.good + 1 }
    setClicks(newClicks)
  }

  const onNeutralClick = () => {
    const newClicks = { ...clicks, neutral: clicks.neutral + 1 }
    setClicks(newClicks)
  }

  const onBadClick = () => {
    const newClicks = { ...clicks, bad: clicks.bad + 1 }
    setClicks(newClicks)
  }
  
  return (
    <div>
      <Header name="give feedback" />
      <Buttons description="good" onClick={onGoodClick} />
      <Buttons description="neutral" onClick={onNeutralClick}/>
      <Buttons description="bad" onClick={onBadClick}/>
      <Header name="statistics" />
      <Statistics clicks={clicks} />
    </div>
  )
}

export default App