import './Property.css'
import seats from '../assets/images/seats.png'
import bedroom from '../assets/images/bedroom.png'
import floorspace from '../assets/images/floorspace.png'

function Property({ img, icon = '', handleClick = () => {} }) {
  return (
    <div className='card' onClick={handleClick}>
      <div
        className='card-image'
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className='card-details'>
        <div className='card-details-price'>
          <div>
            ₦170,000 <span className='per-month'>/month</span>
          </div>
          {icon && (
            <section className='bin'>
              <img src={icon} alt='Bin Image' />{' '}
            </section>
          )}
        </div>
        <div className='card-details-location'>
          <h3>Gwarinpa Estate</h3>
          <p>18 Lake City Str, Gwarinpa, Abuja</p>
        </div>
        <div className='card-details-specs'>
          <div className='dimensions'>
            <div>
              <img src={seats} alt='Seats' />
            </div>
            <div>3</div>
          </div>
          <div className='dimensions'>
            <div>
              <img src={bedroom} alt='Bedroom' />
            </div>
            <div>2</div>
          </div>
          <div className='dimensions  dimensions-move-right'>
            <div>
              <img src={floorspace} alt='Floor space' />
            </div>
            <div>
              50x50m<sup>2</sup>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Property
