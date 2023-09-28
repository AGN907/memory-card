function Gameover({
  score,
  handlePlayAgain,
}) {
  return <div>

    <p>Game over, your score is {score}</p>
    <button onClick={handlePlayAgain}>Play again?</button>
  </div>

}


export default Gameover
