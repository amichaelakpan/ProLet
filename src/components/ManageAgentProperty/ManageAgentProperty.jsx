import './ManageAgentProperty.css'
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
import chat from '../../assets/images/chat.png'

import message from '../../assets/images/message.png'

import Property from '../../utilities/Property'
import property1 from '../../assets/images/property-1.jpg'
import property2 from '../../assets/images/property-2.jpg'
import property3 from '../../assets/images/property-3.jpg'
import property4 from '../../assets/images/property-4.jpg'
import property5 from '../../assets/images/property-5.jpg'
import property6 from '../../assets/images/property-6.jpg'

function ManageAgentProperty() {
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
            <SidebarMenu img={market} text={'Manage Tenants'} />
          </div>
          <div>
            <SidebarMenu img={estate} text={'See Agreement'} />
          </div>
          <div>
            <SidebarMenu img={message} text={'Approvals'} />
          </div>
          <div>
            <SidebarMenu img={favorite} text={'Check Request'} />
          </div>
          <div>
            <SidebarMenu img={chat} text={'Chat'} />
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

        {/* Content Section  */}
        <section className='comp-main-content'>
          <div className='comp-dash-renter-container'>
            {/* Layer 1 */}
            <div className='comp-dash-renter-content-1 dashboard-renter-based-on-location'>
              <div>
                <h2>Let's get you started</h2>
                <p className='agent-properties-message'>
                  Navigate through your account and start managing your
                  properties
                </p>
              </div>
            </div>

            {/* Search Criteria  */}
            <div className='search-content-2 '>
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
                <option value='1'>1 room</option>
                <option value='2'>2 rooms</option>
                <option value='3'>Mini-duplex</option>
                <option value='4'>Full Duplex</option>
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

              <div className='search-button agent-search-btn'>
                <Button
                  text={`Search`}
                  bgcolor={`#3357d0`}
                  color={`#fff`}
                  borderColor={`#fff`}
                  width={`15rem`}
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
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ManageAgentProperty
