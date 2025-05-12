import Button from '../../utilities/Button'

const FooterHeader = () => {
  return (
    <div className='footer-header'>
      <div className='nospam'>No Spam Promise</div>
      <p className='landlord'>Are you a landlord?</p>
      <p className='discover'>
        Discover ways to increase your home value and get listed. No Spam.
      </p>

      <div className='footer-input-container'>
        <div>
          <input
            type='email'
            placeholder='Enter your email address'
            className='footer-input'
          />
        </div>
        <div>
          <Button
            text='Submit'
            bgcolor='#3357d0'
            color='white'
            borderColor='none'
          />
        </div>
      </div>
      <p className='footer-join'>
        Join <span>10,000+</span> other landlords in our ProLet community
      </p>
    </div>
  )
}

export default FooterHeader
