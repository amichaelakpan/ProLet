import Property from '../../utilities/Property'
// import image1 from '../../assets/images/property.png'
// import location from '../../assets/images/location.png'
import Button from '../../utilities/Button'
import HelpDetails from '../../utilities/HelpDetails'
import AboutProletCard from '../../utilities/AboutProletCard'
import StatCard from '../../utilities/StatCard'
import bed from '../../assets/images/bed.png'
import home from '../../assets/images/home.png'
import octagon from '../../assets/images/octagon.png'
import decagon from '../../assets/images/decagon.png'
import search from '../../assets/images/search.png'
import virtualhome from '../../assets/images/virtual-home.png'
import bestdeal from '../../assets/images/best-deal.png'
import getready from '../../assets/images/get-ready.png'

import './About.css'

const About = () => {
  const text = [
    'We offer a wide range of rental properties to match your needs ensuring comfort, convenience and a seamless renting experience',
    'Lease your property with confidence. We connect you with the right tenances for a smooth and secure rental experience.',
    'Enjoy a fully furnished shortlet for a comfortable, convenient and stress-free stay - perfect for usiness trips, vacations or temporary stays.',
  ]
  return (
    <>
      <div className='about-header'>
        <div className='about-header-left'>
          <h1 className='about-header-header'>
            Helping you find the property and Tenant of your dream
          </h1>
          <p>
            A great platform to rent or lease your properties <br /> without
            landlord/tenant palava
          </p>
          <Button
            text={`Explore Properties`}
            bgcolor={`#3357d0`}
            color={`#fff`}
            borderColor={`#375ad1`}
            width={`15rem`}
          />
        </div>
        <div className='about-header-right'>
          <div className='about-section-stat'>
            <div className='about-section-stat-item'>
              <h3>50k+</h3>
              <p>Renters</p>
            </div>
            <div className='about-section-stat-item'>
              <h3>10k+</h3>
              <p>Properties</p>
            </div>
          </div>
        </div>
      </div>

      <div className='about-content'>
        <div className='about-content-left'>
          <h4 className='about-content-left-who'>Who we are</h4>
          <h2 className='about-content-left-header'>
            Assisting individuals in locating the appropriate home and tenant.
          </h2>
          <p className='about-content-left-content'>
            Helping individuals find the perfect home or tenant by matching
            their needs and preferences with suitable properties and renters.
            Ensuring a smooth and efficient process for both parties through
            personalized guidance and support.
          </p>

          <HelpDetails
            cardBgColor={`#fff`}
            img={octagon}
            imgBgColor={`#fff`}
            header={'Personalized Matching'}
            headerColor={'#4361ee'}
            text={
              'We go beyond basic listings by carefully understanding the needs and preferences of both homeowners and tenants to ensure the perfect fit.'
            }
            textColor={'#989898'}
          />
          <HelpDetails
            cardBgColor={`#fff`}
            img={decagon}
            imgBgColor={`#fff`}
            header={'Seamless Experience'}
            headerColor={'#4361ee'}
            text={
              'We provide hands-on guidance and support throughout the entire process making it easier and more efficient for both parties to find the right match.'
            }
            textColor={'#989898'}
          />
        </div>
        <div className='about-content-right'>
          <div className='about-content-right-1'>
            <div className='about-content-right-1-first'></div>
            <div className='about-content-right-1-second'></div>
          </div>
          <div className='about-content-right-2'>
            <div className='about-content-right-2-first'></div>
            <div className='about-content-right-2-second'></div>
            <div className='about-content-right-2-third'></div>
          </div>
        </div>
      </div>

      <div className='about-services'>
        <h3 className='about-services-header1'>Our Services</h3>
        <h2>Finding the right home, connecting the right tenants</h2>
        <div className='about-services-cards'>
          <AboutProletCard img={bed} heading={'Rent a House'} text={text[0]} />
          <AboutProletCard
            img={home}
            heading={'Lease a Property'}
            text={text[1]}
          />
          <AboutProletCard
            img={search}
            heading={'Get a Shortlet'}
            text={text[2]}
          />
        </div>
      </div>

      <div className='about-statistics'>
        <div className='about-statistics-item top'>
          <h1 className='about-statistics-header'>
            We make it easy for <br />{' '}
            <span className='blue-text'>tenants</span> and &nbsp;
            <span className='blue-text'>landlords</span>.
          </h1>
          <div className='about-statistics-description'>
            Whether it's selling your current home, getting financing, or buying
            a new home, we make it easy and efficient. The best part? you'll
            save a bunch of money and time with our services.
          </div>
        </div>
        <div className='about-statistics-item middle'>
          <HelpDetails
            cardBgColor={`#403b77`}
            img={virtualhome}
            imgBgColor={``}
            header={'Virtual Home Tour'}
            headerColor={'#fff'}
            text={
              'You can communicate directly with landlords and we provide you with virtual tour before you rent the property.'
            }
            textColor={'#8380a7'}
          />
          <HelpDetails
            cardBgColor={`#fff`}
            img={bestdeal}
            imgBgColor={``}
            header={'Find the best deal'}
            headerColor={'#000929'}
            text={
              'Browse thousands of properties, save your favorites and set up search alerts so you dont miss the best home deal!'
            }
            textColor={'#8380a7'}
          />
          <HelpDetails
            cardBgColor={`#4e91ff`}
            img={getready}
            imgBgColor={``}
            header={'Get ready to apply'}
            headerColor={'#fff'}
            text={
              'Find your dream house. You just need to do a little or no effort and you can start moving into your new dream home.'
            }
            textColor={'#a3c6ff'}
          />
        </div>
        <div className='about-statistics-item bottom'>
          <StatCard
            textColor={'#fff'}
            header={'7.4%'}
            content={'Property return rate'}
            borderRightColor={'#fff'}
          />
          <StatCard
            textColor={'#fff'}
            header={'3,856'}
            content={'Properties in rent'}
            borderRightColor={'#fff'}
          />
          <StatCard
            textColor={'#fff'}
            header={'2,540'}
            content={'Daily completed transactions'}
            borderRightColor={'none'}
          />
        </div>
      </div>
    </>
  )
}

export default About

{
  /* <div className='left-section-stat'>
<div className='left-section-stat-item'>
  <h3>50k+</h3>
  <p>Renters</p>
</div>
<div className='left-section-stat-item'>
  <h3>10k+</h3>
  <p>Properties</p>
</div>
</div> */
}
