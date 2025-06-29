import handprompt from '../assets/images/handprompt.png'
import Button from './Button'
import './ConfirmationPrompt.css'

export function ConfirmationPrompt({
  message,
  handleCloseModal,
  handleSuccessClick,
}) {
  return (
    <div className='appoint-agent-modal-overlay'>
      <div className='appoint-agent-modal-content'>
        <img src={handprompt} alt='Hand prompt' />
        <p>{message}</p>
        <div className='verify-btn-container'>
          <div className='go-back-div'>
            <Button
              text={`Yes`}
              bgcolor={'#3357D0'}
              color='#fff'
              borderColor={'#fff'}
              width='100%'
              onClick={handleSuccessClick}
            />
          </div>
          <div className='create-wallet-div'>
            <Button
              text={`No`}
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

export function SuccessfulPrompt({
  message,
  handleCloseModal,
  btnText = 'Ok',
}) {
  return (
    <div className='appoint-agent-modal-overlay'>
      <div className='appoint-agent-modal-content'>
        <img src={handprompt} alt='Hand prompt' />
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
