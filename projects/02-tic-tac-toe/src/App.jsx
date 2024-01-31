import { useState } from "react";
import { Square } from './components/Saquare';
import { TURNS } from "./constants";
import confetti from 'canvas-confetti'
import { checkWinner, checkEndGame } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { Board } from "./components/Board";
import { Turns } from "./components/Turns";
import { clearGameStorage, saveGameToStorage } from "./logic/storage";


function App() {
  const [board,setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    if(boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })
  const [turn, setTurn ] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    clearGameStorage()
  }

  const updateBoard = (index) => {
    if(board[index]) return 
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  //guardar aqui la partida
    saveGameToStorage({board:newBoard,turn:newTurn})
    //revisar si hay ganador
    const newWinner = checkWinner(newBoard);
    if( newWinner ){
      confetti()
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <Board board={board} updateBoard={updateBoard} />
      <Turns turn={turn}/>
      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App
