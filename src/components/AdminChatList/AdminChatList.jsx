import './AdminChatList.css'
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

import ChatLogItem from '../../utilities/ChatLogItem'

function AdminChatList() {
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
            <SidebarMenu img={market} text={'Manage Users'} />
          </div>

          <div>
            <SidebarMenu img={chat} text={'Chats'} />
          </div>

          <div>
            <SidebarMenu img={agreement} text={'Support'} />
          </div>
        </menu>

        <h5>Others</h5>
        <menu>
          <div>
            <SidebarMenu img={dashboard} text={'Wallet'} />
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
          <h2>Admin Chats</h2>
          <p>
            This section contains conversations between the user , agent and the
            landlord regarding property management. It may include discussions
            about issues between user and agent and landlord regarding rent
            collection, maintenance requests, lease agreements, and other
            important matters related to the property. Effective communication
            ensures smooth operations and timely resolutions.
          </p>
        </section>

        <section className='comp-get-started'>
          <h3>All User Chats</h3>
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
              time={'9:00pm'}
            />
          </div>

          <div>
            <ChatLogItem
              name={'Julius Baker'}
              message={
                'Hi Landlord, ps I need a repair of ACs in my living room.'
              }
              time={'Sunday'}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default AdminChatList
