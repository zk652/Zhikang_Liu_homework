import { useState } from "react";
import "./task3.css";
function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  function handleClick(index: number) {
    if (winner || board[index]) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function handleRestart() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe</h1>
      <div className="board">
        <div className="row1">
          <div className="box" onClick={() => handleClick(0)}>
            {board[0]}
          </div>
          <div className="box" onClick={() => handleClick(1)}>
            {board[1]}
          </div>
          <div className="box" onClick={() => handleClick(2)}>
            {board[2]}
          </div>
        </div>

        <div className="row2">
          <div className="box" onClick={() => handleClick(3)}>
            {board[3]}
          </div>
          <div className="box" onClick={() => handleClick(4)}>
            {board[4]}
          </div>
          <div className="box" onClick={() => handleClick(5)}>
            {board[5]}
          </div>
        </div>

        <div className="row3">
          <div className="box" onClick={() => handleClick(6)}>
            {board[6]}
          </div>
          <div className="box" onClick={() => handleClick(7)}>
            {board[7]}
          </div>
          <div className="box" onClick={() => handleClick(8)}>
            {board[8]}
          </div>
        </div>
      </div>
      <div className="status">Winner: {winner}</div>
      <button className="restart" onClick={handleRestart}>
        Restart Game
      </button>
    </div>
  );
}

function calculateWinner(squares: Array<number>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
