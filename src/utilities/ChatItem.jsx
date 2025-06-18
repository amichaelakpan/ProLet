import './ChatItem.css'
import sendericon from '../assets/images/sender-icon.png'
import forwardicon from '../assets/images/forward-icon.png'

export function ChatItemSender() {
  return (
    <div className='chat-container-sender'>
      <section className='chat-container-icon-div'>
        <div className='chat-sender-container'>
          <img src={sendericon} alt='Sender Icon' />
        </div>
      </section>
      <section className='chat-sender-message-div'>
        The AI chatbox has been developed to optimize communication and simplify
        work processes, ultimately leading to smoother operations.
      </section>
      <section className='chat-container-icon-div'>
        <div className='chat-forward-container'>
          <img src={forwardicon} alt='Sender Icon' />
        </div>
      </section>
    </div>
  )
}

export function ChatItemReceiver() {
  return (
    <div className='chat-container-sender'>
      <section className='chat-container-icon-div'>
        <div className='chat-forward-container'>
          <img src={forwardicon} alt='Sender Icon' />
        </div>
      </section>

      <section className='chat-receiver-message-div'>
        Rephrase ‘This is an ai chatbot generated for better communication and
        simpler work flows’
      </section>
      <section className='chat-container-icon-div'>
        <div className='chat-receiver-container'>
          <img src={sendericon} alt='Receiver Icon' />
        </div>
      </section>
    </div>
  )
}
