import './ChatLogItem.css'
import chatmessageicon from '../assets/images/chat-message-icon.png'

function ChatLogItem({ name, message, time }) {
  return (
    <div className='chat-log-container'>
      <figure className='chat-log-container-image'>
        <img src={chatmessageicon} alt='Settings' />
      </figure>
      <di className='chat-log-container-content'>
        <h3 className='chat-log-container-title'>{name}</h3>
        <p>{message}</p>
      </di>
      <figure className='chat-log-container-arrow'>{time}</figure>
    </div>
  )
}

export default ChatLogItem
