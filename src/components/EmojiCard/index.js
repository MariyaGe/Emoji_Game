import './index.css'

const EmojiCard = ({emoji, imageOnclickHandler}) => {
  const emojiClickHandler = () => {
    imageOnclickHandler(emoji.id)
  }
  return (
    <li>
      <button className="emoji_card" onClick={emojiClickHandler}>
        <img
          src={emoji.emojiUrl}
          alt={emoji.emojiName}
          className="emoji_image"
        />
      </button>
    </li>
  )
}
export default EmojiCard
