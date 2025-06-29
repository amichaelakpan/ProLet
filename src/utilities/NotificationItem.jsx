import './NotificationItem.css'
import notification from '../assets/images/notification.png'
import Button from './Button'

function NotificationItem({ message, time, date }) {
  return (
    <div className='notification-log-container'>
      <figure className='notification-log-container-image'>
        <img src={notification} alt='Notification' />
      </figure>

      <div>{message}</div>
      <div>{time}</div>
      <div>{date}</div>
      <figure className='notification-log-container-arrow'>
        <Button text={'View'} bgcolor={'#eff'} color={'#082567'} />
      </figure>
    </div>
  )
}

export default NotificationItem
