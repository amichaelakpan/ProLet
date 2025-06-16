import './EditPropertyCard.css'
import seats from '../assets/images/seats.png'

import floorspace from '../assets/images/floorspace.png'
import bin from '../assets/images/bin.png'
import Button from './Button'

function EditPropertyCard({ img }) {
  return (
    <div className='edit-card'>
      <div
        className='edit-card-image'
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className='edit-card-details'>
        <div className='edit-card-details-price'>
          <section className='price'>
            {' '}
            ₦130,000 <span className='per-month'>/month</span>
          </section>
          <section className='bin'>
            <img src={bin} alt='Bin Image' />{' '}
          </section>
        </div>
        <div className='edit-card-details-location'>
          <h3>Gwarinpa Estate</h3>
          <p>18 Lake City Str, Gwarinpa, Abuja</p>
        </div>

        {/* Dimension Containers  */}
        <div className='edit-card-details-specs'>
          <div className='dimensions'>
            <img src={seats} alt='Seats' />

            <div>3</div>
          </div>

          <div className='dimensions'>
            <img src={floorspace} alt='Floor space' />
            <div>
              50x50m<sup>2</sup>
            </div>
          </div>
        </div>

        {/* Button Containers  */}
        <div className='view-edit-btn-div'>
          <div>
            <Button
              text={'View'}
              width='5rem'
              color={'#fff'}
              bgcolor={'#0d59bf'}
            />
          </div>
          <div>
            <Button
              text={'Edit'}
              width='5rem'
              color={'#0d59bf'}
              bgcolor={'#e5ebff'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditPropertyCard
