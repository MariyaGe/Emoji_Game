import React, {useState} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import './index.css'
import WinOrLoseCard from '../WinOrLoseCard'

const EmojiGame = ({emojisList}) => {
  const [score, setScore] = useState(0)
  const [topScore, setTopScore] = useState(0)
  const [displayScore, setDisplayScore] = useState(true)
  const [totalEmojisList, setTotalEmojisList] = useState(emojisList)
  const [selectedEmojis, setSelectedEmojis] = useState([])
  const [gameStatus, setGameStatus] = useState()

  const imageOnclickHandler = id => {
    setSelectedEmojis(prevList => {
      if (prevList.includes(id)) {
        setDisplayScore(false)
        setGameStatus('LOSS')
        setTopScore(prevTopScore => Math.max(score, prevTopScore))
        return prevList
      }
      if (prevList.length === 11) {
        console.log('11')
        setGameStatus('WIN')
        setScore(prevScore => prevScore + 1)
        setTopScore(prevTopScore => Math.max(score, prevTopScore))
        setDisplayScore(false)
        return prevList
      }

      setScore(prevScore => prevScore + 1)
      return [...prevList, id]
    })
    setTotalEmojisList(prevList => {
      const listCopy = [...prevList]
      listCopy.sort(() => Math.random() - 0.5)
      return listCopy
    })
  }

  const playAgainHandler = () => {
    setTopScore(prevTopScore => Math.max(score, prevTopScore))
    setDisplayScore(true)
    setScore(0)
    setSelectedEmojis([])
  }
  return (
    <div className="emoji_game_page">
      <NavBar score={score} topScore={topScore} displayScore={displayScore} />
      {displayScore ? (
        <ul className="emoji_card_wrapper">
          {totalEmojisList.map(emoji => (
            <EmojiCard
              emoji={emoji}
              imageOnclickHandler={imageOnclickHandler}
              key={emoji.id}
            />
          ))}
        </ul>
      ) : (
        <div className="win_loss_wrapper">
          <WinOrLoseCard
            playAgainHandler={playAgainHandler}
            score={score}
            gameStatus={gameStatus}
          />
        </div>
      )}
    </div>
  )
}
export default EmojiGame
