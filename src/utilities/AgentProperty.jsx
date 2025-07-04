import './AgentProperty.css'

import star from '../assets/images/star.png'
import house from '../assets/images/house.png'

function Property({
  name,
  location,
  rating,
  num_properties,
  img,
  icon = '',
  handleClick = () => {},
}) {
  return (
    <div className='card' onClick={handleClick}>
      <div
        className='card-image'
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className='card-details'>
        <div className='card-details-price'>
          <div>{name}</div>
          {icon && (
            <section className='bin'>
              <img src={icon} alt='Bin Image' />{' '}
            </section>
          )}
        </div>
        <div className='card-details-location'>
          <h3>{location}</h3>
          <div className='agent-rating-container'>
            <div>
              <img src={star} alt='Star' />
            </div>
            <div>
              <strong>{rating}</strong>
            </div>
            <div className='agent-rating-text'>(Agent Rating)</div>
          </div>
        </div>
        <div className='card-details-specs'>
          <div className='dimensions'>
            <div>
              <img src={house} alt='Seats' />
            </div>
            <div>{num_properties}+ &nbsp;&nbsp; Properties Managed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Property
