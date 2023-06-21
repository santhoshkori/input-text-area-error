import {Component} from 'react'
import MycomponentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
class Comments extends Component {
  render() {
    return (
      <div className="bgcontainer">
        <h1>Comments</h1>

        <div className="commentscontainer">
          <div>
            <p>Say something about 4.0 techonlogies</p>
            <div className="serachcontainer">
              <input className="inputele" type="text" />
              <textarea></textarea>
              <button type="button" className="buttonele">
                Add Comment
              </button>
            </div>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="commentsimgage"
          />
        </div>
        <hr />
        <p>
          <span className="spanele">0</span> Comments
        </p>
        <ul className="unorderlistelement">
          <MycomponentItem />
        </ul>
      </div>
    )
  }
}

export default Comments
