import './Services.css'
import '../About/About.css'
import headerImage from '../../assets/images/services-header-img.png'
import Button from '../../utilities/Button'
import AboutProletCard from '../../utilities/AboutProletCard'
import bed from '../../assets/images/bed.png'
import home from '../../assets/images/home.png'
import search from '../../assets/images/search.png'

function Services() {
  const text = [
    'We offer a wide range of rental properties to match your needs ensuring comfort, convenience and a seamless renting experience',
    'Lease your property with confidence. We connect you with the right tenances for a smooth and secure rental experience.',
    'Enjoy a fully furnished shortlet for a comfortable, convenient and stress-free stay - perfect for usiness trips, vacations or temporary stays.',
  ]
  return (
    <>
      <div className='services-container'>
        {/* <section className='services-header-left'> */}
        <h1 className='services-header'>
          Helping you find the property and Tenant of your dream
        </h1>

        <p className='services-header-description'>
          A great platform to rent or lease your properties without
          landlord/tenant palava
        </p>

        <div className='services-header-button-container'>
          <Button
            text='Browse Properties'
            bgcolor='#3357d0'
            color='#fff'
            borderColor='none'
            width='auto'
          />
        </div>

        <div className='services-header-img-container'>
          <img
            className='service-header-img'
            src={headerImage}
            alt='Header Image'
          />
        </div>
      </div>

      {/* ABOUT SECTION  */}
      <div className='about-services about-services-section'>
        <h3 className='about-services-header1'>Our Services</h3>
        <h2>Finding the right home, connecting the right tenants</h2>
        <div className='about-services-cards about-services-cards-grid'>
          <div>
            <AboutProletCard
              img={bed}
              heading={'Rent a House'}
              text={text[0]}
            />
          </div>
          <div>
            <AboutProletCard
              img={home}
              heading={'Lease a Property'}
              text={text[1]}
            />
          </div>
          <div>
            <AboutProletCard
              img={search}
              heading={'Get a Shortlet'}
              text={text[2]}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
