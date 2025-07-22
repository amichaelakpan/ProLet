import './AdminChat.css'
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

function AdminChat() {
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

        <section className='comp-get-started list-agreement-agent-header'>
          <div className='transaction-history-title tenant-prop-options'>
            <div>
              <Button
                text={'Landlords'}
                bgcolor={'#e5ebff'}
                color={'#3357d0'}
                width='100%'
              />
            </div>
            <div>
              <Button
                text={'Renters'}
                bgcolor={'#e5ebff'}
                color={'#3357d0'}
                width='100%'
              />
            </div>
            <div>
              <Button
                text={'Agents'}
                bgcolor={'#e5ebff'}
                color={'#3357d0'}
                width='100%'
              />
            </div>
            <div>
              <Button
                text={'All'}
                bgcolor={'#3357d0'}
                color={'#fff'}
                width='100%'
              />
            </div>
          </div>

          <h1>Admin - All Chats</h1>
        </section>

        {/* Content Section  */}
        <section className='comp-main-content chat-log-settings-container'>
          <div>
            <ChatLogItem
              name={'Daniel' + '(Landlord)'}
              message={'Sign Agreement'}
              time={'4:20pm'}
            />
          </div>
          <div>
            <ChatLogItem
              name={'Monalisa' + '(Landlord)'}
              message={'Sign Agreement'}
              time={'Friday'}
            />
          </div>
          <div>
            <ChatLogItem
              name={'Jane' + '(Renter)'}
              message={'Sign Agreement'}
              time={'Thursday'}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default AdminChat
