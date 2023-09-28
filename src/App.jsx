import { useEffect, useRef, useState } from 'react'
import './styles/App.css'
import allCharacters from './api/data.js'
import Card from './components/Card'
import Gameover from './components/Gameover'

function App() {
  const [selectedIds, setSelectedIds] = useState(new Set())
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [showCards, setShowCards] = useState(true)
  const [isFinished, setIsFinished] = useState(false)
  const charList = useRef(allCharacters.sort(() => Math.random() - 0.50).slice(0, 12))

  function handleClick(charId, e) {
    console.log('Click first')
    setShowCards(false)
    const copyIds = new Set(selectedIds)
    if (copyIds.has(charId)) {
      setIsFinished(true)
      return

    }
    copyIds.add(charId)
    setSelectedIds(copyIds)
    setScore(score + 1)
    setBestScore(score >= bestScore ? score + 1 : bestScore)
    const filteredArray = shuffleList(allCharacters)

    charList.current = filteredArray.slice(0, 12)

    setTimeout(() => {

      setShowCards(true)
    }, 1500)

  }

  function shuffleList(array) {
    array.sort(() => Math.random() - 0.5)
    return array.slice(0, 12)
  }

  function playAgain() {
    setScore(0)
    setIsFinished(false)
    setShowCards(true)
    setSelectedIds(new Set())
  }

  return (
    <div>
      <h1>Memory game</h1>
      <p>Get points by clicking on the characters, but not more then once!</p>
      <div style={{ marginTop: '4rem' }}>
        {isFinished ?
          <Gameover score={score} handlePlayAgain={playAgain} />
          :
          <div>
            <p>Score: {score} Bestscore: {bestScore}</p>
            <div className='characters'>
              {charList.current.map(character => {
                return <Card key={character.id} show={showCards} character={character} handleClick={handleClick} />
              })}
            </div>
          </div>


        }
      </div>
    </div>
  )
}

export default App
