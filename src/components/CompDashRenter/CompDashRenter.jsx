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
import information from '../../assets/images/information.png'

import './CompDashRenter.css'
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

function CompDashRenter() {
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
            <SidebarMenu img={agreement} text={'Chat'} />
          </div>
          <div>
            <SidebarMenu img={information} text={'Favorite'} />
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
            {/* Layer 2  */}
            <div className='comp-dash-renter-content-2'>
              <select name='' id=''>
                <option value='' disabled selected hidden>
                  Select property type...
                </option>
                <option value='1'>first</option>
                <option value='2'>second</option>
                <option value='3'>third</option>
                <option value='4'>fourth</option>
              </select>
              <select name='' id=''>
                <option value='' disabled selected hidden>
                  Select Rooms...
                </option>
                <option value='1'>first</option>
                <option value='2'>second</option>
                <option value='3'>third</option>
                <option value='4'>fourth</option>
              </select>
              <select name='' id=''>
                <option value='' disabled selected hidden>
                  Furnished Apartments...
                </option>
                <option value='1'>first</option>
                <option value='2'>second</option>
                <option value='3'>third</option>
                <option value='4'>fourth</option>
              </select>

              <div className='comp-dash-renter-button'>
                <Button
                  text={`Search`}
                  bgcolor={`#3357d0`}
                  color={`#fff`}
                  borderColor={`#fff`}
                  width={`15rem`}
                />
              </div>
            </div>

            {/* Layer 1 */}
            <div className='comp-dash-renter-content-1'>
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
                <Property img={property1} />
              </div>
              <div>
                <Property img={property2} />
              </div>
              <div>
                <Property img={property3} />
              </div>
              <div>
                <Property img={property4} />
              </div>
              <div>
                <Property img={property5} />
              </div>
              <div>
                <Property img={property6} />
              </div>
              <div>
                <Property img={property7} />
              </div>
              <div>
                <Property img={property8} />
              </div>
              <div>
                <Property img={property9} />
              </div>

              <div>
                <Property img={property10} />
              </div>
              <div>
                <Property img={property11} />
              </div>
              <div>
                <Property img={property12} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CompDashRenter
