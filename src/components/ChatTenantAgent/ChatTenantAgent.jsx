import './ChatTenantAgent.css'
import Logo from '../Header/Logo'
import SidebarMenu from '../../utilities/SidebarMenu'
import Button from '../../utilities/Button'

import arrow from '../../assets/images/arrow.png'
import dashboardimg from '../../assets/images/dashboardimg.png'
import bell from '../../assets/images/bell.png'
import dashboard from '../../assets/images/dashboard.png'
import market from '../../assets/images/market.png'
import agreement from '../../assets/images/agreement.png'
import favorite from '../../assets/images/favorite.png'

import chat from '../../assets/images/chat.png'
import settings from '../../assets/images/settings.png'
import logout from '../../assets/images/logout.png'

import '../CompDashRenter/CompDashRenter.css'

import ChatLogItem from '../../utilities/ChatLogItem'

function ChatTenantAgent() {
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

        <section className='comp-get-started manage-tenants-header-text'>
          <h2>Chat</h2>
          <p>
            This section contains conversations between the you and agent
            regarding property management. It may include discussions about rent
            collection, maintenance requests, lease agreements, and other
            important matters related to the property. Effective communication
            ensures smooth operations and timely resolutions.
          </p>
        </section>

        <section className='comp-get-started'>
          <h3>All Chats</h3>
        </section>

        {/* Content Section  */}
        <section className='comp-main-content chat-log-settings-container'>
          <div>
            <ChatLogItem
              name={'Uwem Stack'}
              message={
                'Good day Alhaji, please the power source to the generator is faulty, kindly fix it.'
              }
              time={'2:30am'}
            />
          </div>
          <div>
            <ChatLogItem
              name={'John Doe'}
              message={
                'Hello Musa, kindly fix the leaking pipe in the kitchen.'
              }
              time={'Friday'}
            />
          </div>
          <div>
            <ChatLogItem
              name={'Mary Jane'}
              message={
                'Good day Ikechukwu, the AC in my room is not working, please fix it.'
              }
              time={'Thursday'}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default ChatTenantAgent
