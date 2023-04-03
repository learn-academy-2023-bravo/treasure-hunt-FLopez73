import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"
const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ])
  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  )

  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  )

  const [count, setCount] = useState(5)

  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board]
    if (clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = "💎"
      setBoard(updateBoard)
    } else if (clickedSquare === bombLocation) {
      updateBoard[clickedSquare] = "💣"
      setBoard(updateBoard)
    } else {
      updateBoard[clickedSquare] = "🌲"
      setBoard(updateBoard)
    }
  }

  const gameRestart = () => {
    window.location.reload()
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <p className="turnCounter"> Turns Left {count} </p>
      <div className="board">
        {board.map((square, index) => {
          return (
            <Square
              square={square}
              index={index}
              key={index}
              handleGamePlay={handleGamePlay}
            />
          )
        })}
      </div>
      <div>
        <button className="button" onClick={gameRestart}>
          Play Again
        </button>
      </div>
    </>
  )
}

export default App
