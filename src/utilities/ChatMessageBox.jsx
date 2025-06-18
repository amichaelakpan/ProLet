import './ChatMessageBox.css'
import microphone from '../assets/images/microphone.png'
import attachment from '../assets/images/attachment.png'
import send from '../assets/images/send.png'
import smile from '../assets/images/smile-emoji.png'

function ChatMessageBox() {
  return (
    <div className='reg-data-div chatbox-div'>
      <input
        type='text'
        className='textbox'
        placeholder='Type a new message here...'
      />
      <img src={attachment} alt='Attachment' />
      <img src={smile} alt='smile' />
      <img src={send} alt='send' />
      <img src={microphone} alt='speaker' />
    </div>
  )
}

export default ChatMessageBox
