import './DashboardRenter.css'
import '../RenterReg/RenterReg.css'
import Logo from '../Header/Logo'
import SidebarMenu from '../../utilities/SidebarMenu'
import Button from '../../utilities/Button'

import arrow from '../../assets/images/arrow.png'
import dashboardimg from '../../assets/images/dashboardimg.png'
import bell from '../../assets/images/bell.png'
import dashboard from '../../assets/images/dashboard.png'
import market from '../../assets/images/market.png'
import estate from '../../assets/images/estate.png'
import agreement from '../../assets/images/agreement.png'
import favorite from '../../assets/images/favorite.png'
import heart from '../../assets/images/heart.png'
import redalert from '../../assets/images/redalert.png'
import message from '../../assets/images/message.png'

import Property from '../../utilities/Property'
import property1 from '../../assets/images/property-1.jpg'
import property2 from '../../assets/images/property-2.jpg'
import property3 from '../../assets/images/property-3.jpg'
import property4 from '../../assets/images/property-4.jpg'
import property5 from '../../assets/images/property-5.jpg'
import property6 from '../../assets/images/property-6.jpg'
import property7 from '../../assets/images/property-7.jpg'
import property8 from '../../assets/images/property-8.jpg'
import property9 from '../../assets/images/property-9.jpg'
import property10 from '../../assets/images/property-10.jpg'
import property11 from '../../assets/images/property-11.jpg'
import property12 from '../../assets/images/property-12.jpg'

function DashboardRenter() {
  // Code Block to handle File Upload

  return (
    <div className='dashboard-container'>
      <div className='dashboard-sidebar'>
        <div className='sidebar-header'>
          <div>
            <Logo />
          </div>

          <img src={arrow} alt='Nav Arrow' />
        </div>

        <h5>Menu</h5>
        <menu>
          <div>
            <SidebarMenu img={dashboard} text={'Dashboard'} />
          </div>
          <div>
            <SidebarMenu img={market} text={'My Apartment'} />
          </div>
          <div>
            <SidebarMenu img={estate} text={'Sign Agreement'} />
          </div>
          <div>
            <SidebarMenu img={message} text={'Message Owner'} />
          </div>
          <div>
            <SidebarMenu img={favorite} text={'Favorite'} />
          </div>
        </menu>

        <h5>Others</h5>
        <menu>
          <div>
            <SidebarMenu img={dashboard} text={'Wallet'} />
          </div>
          <div>
            <SidebarMenu img={market} text={'Help'} />
          </div>
          <div>
            <SidebarMenu img={estate} text={'Advance Settings'} />
          </div>
          <div>
            <SidebarMenu img={agreement} text={'Log Out'} />
          </div>
        </menu>
      </div>

      <div className='comp-reg-main'>
        {/* Title Section  */}
        <section className='comp-main-titlebar'>
          <h3>Dashboard</h3>
          <img src={dashboardimg} alt='Dashboard image' />
          <p>Uwem Stack</p>
          <img src={bell} alt='Bell Icon' />
        </section>

        <section className='comp-get-started'>
          <h3>Let's get you started</h3>
          <p>
            Navigate through your account and start browsing your dream
            properties
          </p>
        </section>

        {/* Content Section  */}
        <section className='comp-main-content'>
          <div className='comp-dash-renter-container'>
            {/* Header Section  */}

            <section className='dashboard-main-header dashboard-renter-header-section '>
              <h3>Please complete your registration</h3>
              <div className='dashboard-main-header-message dashboard-renter-complete-section'>
                <img src={redalert} alt='Red Alert' />
                <div className='dashboard-main-header-text'>
                  <h5>Your're almost there</h5>
                  <p>Please complete your profile setup</p>
                </div>
                <div className='dashboard-main-header-btn'>
                  <Button
                    text='Complete Now'
                    bgcolor='#465dcb'
                    color='#fff'
                    borderColor='none'
                    width=''
                  />{' '}
                </div>
              </div>
            </section>

            {/* Layer 1 */}
            <div className='comp-dash-renter-content-1 dashboard-renter-based-on-location'>
              <div>
                <h2>Based on your location</h2>
                <p>Some of our picked properties near your location</p>
              </div>

              <div>
                <Button
                  text={`Browse more properties`}
                  bgcolor={`#3357d0`}
                  color={`#fff`}
                  borderColor={`#375ad1`}
                />
              </div>
            </div>

            {/* Layer 3 */}
            <div className='comp-dash-renter-content-3'>
              <div>
                <Property img={property1} icon={heart} />
              </div>
              <div>
                <Property img={property2} icon={heart} />
              </div>
              <div>
                <Property img={property3} icon={heart} />
              </div>
              <div>
                <Property img={property4} icon={heart} />
              </div>
              <div>
                <Property img={property5} icon={heart} />
              </div>
              <div>
                <Property img={property6} icon={heart} />
              </div>
              <div>
                <Property img={property7} icon={heart} />
              </div>
              <div>
                <Property img={property8} icon={heart} />
              </div>
              <div>
                <Property img={property9} icon={heart} />
              </div>

              <div>
                <Property img={property10} icon={heart} />
              </div>
              <div>
                <Property img={property11} icon={heart} />
              </div>
              <div>
                <Property img={property12} icon={heart} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DashboardRenter
