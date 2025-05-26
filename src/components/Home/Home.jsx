import Property from '../../utilities/Property'
import image1 from '../../assets/images/property.png'
import location from '../../assets/images/location.png'

import './Home.css'

const HomePage = () => {
  return (
    <div className='main-content'>
      <div className='main-content-left'>
        <main className='left-section-main'>
          <h2>Rent or Lease your property easily</h2>
          <p>
            A great platform to rent or lease your properties without palava
          </p>
        </main>
        <div className='left-section-stat'>
          <div className='left-section-stat-item'>
            <h3>50k+</h3>
            <p>Renters</p>
          </div>
          <div className='left-section-stat-item'>
            <h3>10k+</h3>
            <p>Properties</p>
          </div>
        </div>
        <div className='left-section-footer'>
          <div className='left-section-footer-buttons'>
            <button>Residence Rent</button>
            <button>Short-let finder</button>
          </div>
          <div className='left-section-footer-browse'>
            <div className='left-section-footer-browse-left'>
              <h4>Location</h4>
              <input
                className='footer-search'
                type='text'
                placeholder='Search'
              />
            </div>
            <div className='left-section-footer-browse-right'>
              <button>Browse Properties</button>
            </div>
          </div>
          {/* <div className='left-section-footer-browse'>
              <div>Left</div>
              <div>Right</div>
            </div> */}
        </div>
      </div>
      <div className='main-content-right'>
        <div className='main-content-right-left'>
          <Property img={image1} />
        </div>
        <div className='main-content-right-right'>
          <img src={location} alt='Coordinates' />
        </div>
      </div>
    </div>
  )
}

export default HomePage
