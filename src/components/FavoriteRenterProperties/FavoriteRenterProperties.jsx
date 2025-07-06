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
import chat from '../../assets/images/chat.png'
import favorite from '../../assets/images/favorite.png'
import heart from '../../assets/images/heart.png'

import './FavoriteRenterProperties.css'
import Property from '../../utilities/Property'
import property1 from '../../assets/images/property-1.jpg'
import property2 from '../../assets/images/property-2.jpg'
import property3 from '../../assets/images/property-3.jpg'
import property4 from '../../assets/images/property-4.jpg'
import property5 from '../../assets/images/property-5.jpg'
import property6 from '../../assets/images/property-6.jpg'
import property7 from '../../assets/images/property-7.jpg'
// import property8 from '../../assets/images/property-8.jpg'
// import property9 from '../../assets/images/property-9.jpg'
// import property10 from '../../assets/images/property-10.jpg'
// import property11 from '../../assets/images/property-11.jpg'
// import property12 from '../../assets/images/property-12.jpg'

function FavoriteRenterProperties() {
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
            <SidebarMenu img={agreement} text={'Sign Agreement'} />
          </div>
          <div>
            <SidebarMenu img={chat} text={'Chat'} />
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
          <h1>Favorites</h1>
          <p>
            With this page, you revisit through your records—simply visit your
            Favorites to find everything you’ve selected for later action. You
            can remove, or review these items at any time, making it easier to
            stay organized.
          </p>
        </section>

        {/* Content Section  */}
        <section className='comp-main-content'>
          <div className='comp-dash-renter-container'>
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
              <div></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FavoriteRenterProperties
