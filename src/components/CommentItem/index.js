import './index.css'
import {formatDistanceToNow} from 'date-fns'

const MycomponentItem = props => {
  const {} = props
  return (
    <li className="listItem">
      <div className="listcontainer">
        <p className="nameparaele">
          <span className="itemsspanele">S</span> Santhosh{'  '}
        </p>
        <p className="timeele">2 minutes ago</p>
      </div>
      <p className="descriptionele">Will see you to wish you the best</p>

      <div className="deletelikecontainer">
        <p>
          <img src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png" />{' '}
          Like
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
        />
      </div>
      <hr />
    </li>
  )
}
export default MycomponentItem
