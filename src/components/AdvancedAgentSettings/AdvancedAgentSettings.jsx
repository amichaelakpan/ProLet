import './AdvancedAgentSettings.css'
import Logo from '../Header/Logo'
import SidebarMenu from '../../utilities/SidebarMenu'
import Button from '../../utilities/Button'

import arrow from '../../assets/images/arrow.png'
import dashboardimg from '../../assets/images/dashboardimg.png'
import bell from '../../assets/images/bell.png'
import dashboard from '../../assets/images/dashboard.png'
import market from '../../assets/images/market.png'
import agreement from '../../assets/images/agreement.png'
import personalinfo from '../../assets/images/personal-info.png'
import settings2 from '../../assets/images/settings-2.png'
import lock from '../../assets/images/lock.png'

import chat from '../../assets/images/chat.png'
import settings from '../../assets/images/settings.png'
import logout from '../../assets/images/logout.png'

import '../CompDashRenter/CompDashRenter.css'

import Settings from '../../utilities/Settings'

function AdvancedAgentSettings() {
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
            <SidebarMenu img={market} text={'See Agreement'} />
          </div>
          <div>
            <SidebarMenu img={agreement} text={'Approvals'} />
          </div>
          <div>
            <SidebarMenu img={agreement} text={'Check Request'} />
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

      <div className='comp-reg-main'>
        {/* Title Section  */}
        <section className='comp-main-titlebar'>
          <h3>Dashboard</h3>
          <img src={dashboardimg} alt='Dashboard image' />
          <p>Uwem Stack</p>
          <img src={bell} alt='Bell Icon' />
        </section>

        <section className='comp-get-started'>
          <h3>Advanced Agent Settings</h3>
          <p>Customize Preferences and manage advanced options.</p>
        </section>

        {/* Content Section  */}
        <section className='comp-main-content advanced-settings-container'>
          <div>
            <Settings img={personalinfo} title={'Personal Information'} />
          </div>
          <div>
            <Settings img={settings2} title={'Delete Account'} />
          </div>
          <div>
            <Settings img={lock} title={'Change Password'} />{' '}
          </div>
        </section>
      </div>
    </div>
  )
}

export default AdvancedAgentSettings
