import './index.css'

const WinOrLoseCard = ({playAgainHandler, score, gameStatus}) => {
  console.log(gameStatus, 'at win')
  const imageUrl =
    gameStatus === 'WIN'
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const title = gameStatus === 'WIN' ? 'You Won' : 'You Lose'
  return (
    <div className="win_lose">
      <div className="result_content">
        <h1>{title}</h1>
        <div className="result">
          {gameStatus === 'WIN' ? (
            <>
              <span> Best Score</span>
              <span className="score"> 12/12</span>
            </>
          ) : (
            <>
              <span>Score</span>
              <span className="score"> {score}/12</span>
            </>
          )}
          <div>
            <button onClick={playAgainHandler} className="play_again_button">
              Play Again
            </button>
          </div>
        </div>
      </div>

      <img src={imageUrl} className="win_lose_image" alt="win or lose" />
    </div>
  )
}
export default WinOrLoseCard
