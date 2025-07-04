import handprompt from '../assets/images/handprompt.png'
import Button from './Button'
import './ConfirmationPrompt.css'

export function ConfirmationPrompt({
  message,
  handleCloseModal,
  handleSuccessClick,
  img = { handprompt },
  messageColor = '#fff',
  headerText = '',
  yes = 'Yes',
  no = 'No',
}) {
  return (
    <div className='appoint-agent-modal-overlay'>
      <div className='appoint-agent-modal-content'>
        {img === '' ? '' : <img src={img} alt='Hand prompt' />}
        <h2>{headerText}</h2>
        <p style={{ color: `${messageColor === '' ? '#eee' : messageColor}` }}>
          {message}
        </p>
        <div className='verify-btn-container'>
          <div className='go-back-div'>
            <Button
              text={yes}
              bgcolor={'#3357D0'}
              color='#fff'
              borderColor={'#fff'}
              width='100%'
              onClick={handleSuccessClick}
            />
          </div>
          <div className='create-wallet-div'>
            <Button
              text={no}
              bgcolor={'#e5ebff'}
              color='#3357D0'
              borderColor={'#fff'}
              width='100%'
              onClick={handleCloseModal}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function SuccessfulPrompt({
  message,
  handleCloseModal,
  btnText = 'Ok',
  img = handprompt,
}) {
  return (
    <div className='appoint-agent-modal-overlay'>
      <div className='appoint-agent-modal-content'>
        <img src={img} alt='Hand prompt' />
        <p>{message}</p>
        <div className='verify-btn-container'>
          <div className='go-back-div'>
            <Button
              text={btnText}
              bgcolor={'#3357D0'}
              color='#fff'
              borderColor={'#fff'}
              width='100%'
              onClick={handleCloseModal}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
