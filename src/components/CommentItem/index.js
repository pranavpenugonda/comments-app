// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {
    commentDetails,
    initialContainerBackgroundClassNames,
    toggleIsLiked,
    onDeleteCommentItem,
  } = props
  const {name, comment, isLiked, id, postedTime} = commentDetails
  const imgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeClassName = isLiked ? 'liked-class' : ''
  const num = Math.floor(Math.random() * 7)

  const onClickLikeBtn = () => {
    toggleIsLiked(id)
  }

  const relativeTime = formatDistanceToNow(new Date(postedTime), {
    addSuffix: true,
  })

  const onClickDeleteCommentItem = () => {
    onDeleteCommentItem(id)
  }

  return (
    <li className="comment-list-item">
      <div className="name-comment-container">
        <p className={`name-ind0 ${initialContainerBackgroundClassNames[num]}`}>
          {name[0]}
        </p>
        <div>
          <h1 className="name-heading">{name}</h1>
          <p className="comment-desc">{comment}</p>
        </div>
        <p className="time-txt">{relativeTime}</p>
      </div>
      <div className="like-delete-container">
        <div className="like-container">
          <button type="button" onClick={onClickLikeBtn} className="like-btn">
            <img src={imgUrl} alt="like" className="like-dlt-img" />
          </button>
          <p className={`like-txt ${likeClassName}`}>Like</p>
        </div>
        <button
          type="button"
          className="delete-btn"
          data-testid="delete"
          onClick={onClickDeleteCommentItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="like-dlt-img"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
