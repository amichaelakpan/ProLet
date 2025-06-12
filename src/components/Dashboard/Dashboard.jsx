import './Dashboard.css'
import Logo from '../Header/Logo'
import arrow from '../../assets/images/arrow.png'
import dashboardimg from '../../assets/images/dashboardimg.png'
import bell from '../../assets/images/bell.png'
import redalert from '../../assets/images/redalert.png'
import Button from '../../utilities/Button'
import dashboard from '../../assets/images/dashboard.png'
import market from '../../assets/images/market.png'
import estate from '../../assets/images/estate.png'
import agreement from '../../assets/images/agreement.png'
import information from '../../assets/images/information.png'
import chat from '../../assets/images/chat.png'

import SidebarMenu from '../../utilities/SidebarMenu'

function Dashboard() {
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
            <SidebarMenu img={estate} text={'Manage Agents'} />
          </div>
          <div>
            <SidebarMenu img={agreement} text={'Agreement'} />
          </div>
          <div>
            <SidebarMenu img={information} text={'Check Request'} />
          </div>
          <div>
            <SidebarMenu img={chat} text={'Chat'} />
          </div>
        </menu>
      </div>

      <div className='dashboard-main'>
        {/* Title Section  */}
        <section className='dashboard-main-titlebar'>
          <h3>Dashboard</h3>
          <img src={dashboardimg} alt='Dashboard image' />
          <p>Uwem Stack</p>
          <img src={bell} alt='Bell Icon' />
        </section>

        {/* Header Section  */}
        <section className='dashboard-main-header'>
          <h3>Please complete your registration</h3>
          <div className='dashboard-main-header-message'>
            <img src={redalert} alt='Red Alert' />
            <div className='dashboard-main-header-text'>
              <h5>Your're almost there</h5>
              <p>Please complete your profile setup</p>
            </div>
            <div className='ashboard-main-header-btn'>
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

        {/* Content Section  */}
        <section className='dashboard-main-content'>
          {' '}
          <h3>Type of User</h3>
          <div className='dashboard-main-content-message'>
            <div className='dashboard-main-content-text'>
              <h5>Select a user type</h5>
              <ul>
                <li>
                  <input type='radio' />
                  Renter
                </li>
                <li>
                  <input type='radio' />
                  Landlord
                </li>
                <li>
                  <input type='radio' />
                  Agent
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard
