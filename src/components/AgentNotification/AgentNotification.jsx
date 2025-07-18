import './AgentNotification.css'
import Logo from '../Header/Logo'
import SidebarMenu from '../../utilities/SidebarMenu'
import Button from '../../utilities/Button'

import arrow from '../../assets/images/arrow.png'
import dashboardimg from '../../assets/images/dashboardimg.png'
import bell from '../../assets/images/bell.png'
import dashboard from '../../assets/images/dashboard.png'
import market from '../../assets/images/market.png'
import agreement from '../../assets/images/agreement.png'

import chat from '../../assets/images/chat.png'
import settings from '../../assets/images/settings.png'
import logout from '../../assets/images/logout.png'

import '../CompDashRenter/CompDashRenter.css'

import NotificationItem from '../../utilities/NotificationItem'

function AgentNotification() {
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
          <h3>Agents Notifications Page</h3>
          <p>
            The Notifications Page keeps you informed about important updates,
            reminders and alerts
          </p>
        </section>

        {/* Content Section  */}
        <section className='comp-main-content chat-log-settings-container'>
          <div>
            <NotificationItem
              message={
                'Good day Alhaji, please the power source to the generator is faulty, kindly fix it.'
              }
              time={'1:30pm'}
              date={'06-11-2024'}
            />
          </div>
          <div>
            <NotificationItem
              message={
                'Hello Musa, kindly fix the leaking pipe in the kitchen.'
              }
              time={'2:50pm'}
              date={'06-11-2024'}
            />
          </div>
          <div>
            <NotificationItem
              message={
                'Good day Ikechukwu, the AC in my room is not working, please fix it.'
              }
              time={'3:05pm'}
              date={'06-11-2024'}
            />
          </div>

          <div>
            <NotificationItem
              message={
                'Good afternoon Kazeem, the repairs have been effected in my apartment. thanks'
              }
              time={'9:05pm'}
              date={'05-05-2024'}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default AgentNotification
