import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialCommentList = []
// Write your code here
class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentList: initialCommentList,
    count: 0,
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()

    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      postedTime: new Date(),
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      count: prevState.count + 1,
      name: '',
      comment: '',
    }))
  }

  onDeleteCommentItem = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(
        eachComment => id !== eachComment.id,
      ),
      count: prevState.count - 1,
    }))
  }

  render() {
    const {name, comment, commentList, count} = this.state
    return (
      <div>
        <div className="bg-container2">
          <div className="cont-1">
            <h1 className="comment-heading">Comments</h1>
            <p className="desc">Say something about 4.0 Technologies</p>
            <form
              className="comment-form-container"
              onSubmit={this.onAddComment}
            >
              <input
                value={name}
                onChange={this.onChangeName}
                className="input"
                placeholder="Your Name"
              />
              <textarea
                className="input"
                onChange={this.onChangeComment}
                placeholder="Your Comment"
                rows="6"
                cols="50"
              >
                {comment}
              </textarea>
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments img"
              className="comment-img"
            />
          </div>
        </div>
        <hr className="hr-line" />

        <div className="comment-count-container">
          <p className="comment-count">{count}</p>
          <p className="comment-txt">Comments</p>
        </div>
        <ul className="comment-ul-container">
          {commentList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              initialContainerBackgroundClassNames={
                initialContainerBackgroundClassNames
              }
              toggleIsLiked={this.toggleIsLiked}
              onDeleteCommentItem={this.onDeleteCommentItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
