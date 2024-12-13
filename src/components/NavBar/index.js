import './index.css'

const NavBar = ({topScore, score, displayScore}) => {
  return (
    <div className="nav_container">
      <div className="nav_logo">
        <img
          className="emoji_logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <p>Emoji Game</p>
      </div>
      {displayScore && (
        <div className="nav_score_section">
          <p> Score: {score}</p>
          <p> Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}
export default NavBar
