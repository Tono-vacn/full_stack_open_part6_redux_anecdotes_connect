//import { useSelector} from 'react-redux'
import { connect } from 'react-redux'
//import notificationReducer, { createNotification, removeNotification } from '../reducers/notificationReducer'

const Notification = (props) => {
  // const dispatch = useDispatch()
  //const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (props.notification === '') {
    return null
  }
  // else{
  //   setTimeout(() => {
  //     dispatch(removeNotification())
  //   }, 5000)
  // }
  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        notification: state.notification
    }
}

export default connect(mapStateToProps)(Notification)