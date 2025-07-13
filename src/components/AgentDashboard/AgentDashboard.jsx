import './AgentDashboard.css'
import Logo from '../Header/Logo'
import arrow from '../../assets/images/arrow.png'
import dashboardimg from '../../assets/images/dashboardimg.png'
import bell from '../../assets/images/bell.png'
import redalert from '../../assets/images/redalert.png'
import Button from '../../utilities/Button'
import dashboard from '../../assets/images/dashboard.png'
import market from '../../assets/images/market.png'
import agreement from '../../assets/images/agreement.png'
import information from '../../assets/images/information.png'
import chat from '../../assets/images/chat.png'
import settings from '../../assets/images/settings.png'
import logout from '../../assets/images/logout.png'

import SidebarMenu from '../../utilities/SidebarMenu'

function AgentDashboard() {
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
            <SidebarMenu img={agreement} text={'See Agreement'} />
          </div>
          <div>
            <SidebarMenu img={information} text={'Approvals'} />
          </div>
          <div>
            <SidebarMenu img={information} text={'Check Request'} />
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
            <SidebarMenu img={settings} text={'Advance Settings'} />
          </div>
          <div>
            <SidebarMenu img={logout} text={'Log Out'} />
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
          <h3>Agent Dashboard: Please complete your registration</h3>
          <div className='dashboard-main-header-message'>
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

          {/* Searc Criteria  */}
          <div className='search-content-2 agent-dashboard-search-containter'>
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
        </section>

        {/* Search Filter */}
      </div>
    </div>
  )
}

export default AgentDashboard
