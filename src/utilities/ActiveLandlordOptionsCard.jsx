import './ActiveLandlordOptionsCard.css'
import './Button'
import Button from './Button'

function ActiveLandlordOptionsCard({ img, title, content, btntext }) {
  return (
    <div className='active-landlord-options-card'>
      <div className='landlord-options-card-header'>
        <div className='icon-container'>
          <img src={img} alt='Home Icon' />
        </div>
      </div>
      <div className='landlord-options-card-body'>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>

      <div className='landlord-options-card-btn'>
        <Button
          text={`${btntext}`}
          width='100%'
          color={'#0d59bf'}
          borderColor={'#0d59bf'}
          bgcolor={'#fff'}
        />
      </div>
    </div>
  )
}

export default ActiveLandlordOptionsCard
