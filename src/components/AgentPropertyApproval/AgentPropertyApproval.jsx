import './AgentPropertyApproval.css'
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

import plus50 from '../../assets/images/plus-50.png'

import message from '../../assets/images/message.png'

import Property from '../../utilities/Property'
import property1 from '../../assets/images/property-1.jpg'
import property2 from '../../assets/images/property-2.jpg'
import property3 from '../../assets/images/property-3.jpg'
import property4 from '../../assets/images/property-4.jpg'
import property5 from '../../assets/images/property-5.jpg'
import property6 from '../../assets/images/property-6.jpg'

function AgentPropertyApproval() {
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

        {/* Content Section  */}
        <section className='comp-main-content'>
          <div className='comp-dash-renter-container'>
            {/* Layer 1 */}
            <div className='comp-dash-renter-content-1 dashboard-renter-based-on-location'>
              <div>
                <h2>Properties waiting for Approval</h2>
                <p className='agent-properties-message'>
                  The below shows the list of properties that need to be
                  approved before it will be added to your list of managed
                  properties
                </p>
              </div>

              <div>
                <Button
                  text={`Browse more properties`}
                  bgcolor={`#3357d0`}
                  color={`#fff`}
                  borderColor={`#375ad1`}
                  width='16rem'
                />
              </div>
            </div>

            {/* Layer 3 */}
            <div className='comp-dash-renter-content-3'>
              <div>
                <Property img={property1} icon={plus50} />
              </div>
              <div>
                <Property img={property2} icon={plus50} />
              </div>
              <div>
                <Property img={property3} icon={plus50} />
              </div>
              <div>
                <Property img={property4} icon={plus50} />
              </div>
              <div>
                <Property img={property5} icon={plus50} />
              </div>
              <div>
                <Property img={property6} icon={plus50} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AgentPropertyApproval
