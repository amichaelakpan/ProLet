import React from 'react'

import './AdminChatView.css'
import '../RenterReg/RenterReg.css'
import Logo from '../Header/Logo'
import SidebarMenu from '../../utilities/SidebarMenu'
import Button from '../../utilities/Button'
import { Records } from '../../utilities/Records'
import { RecordsHeader } from '../../utilities/Records'

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
import WalletActionsCard from '../../utilities/WalletActionsCard'
import { ChatItemSender, ChatItemReceiver } from '../../utilities/ChatItem'
import ChatMessageBox from '../../utilities/ChatMessageBox'

function AdminChatView() {
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
          <h3>Dashboard - Admin Chat View</h3>
          <img src={dashboardimg} alt='Dashboard image' />
          <p>Uwem Stack</p>
          <img src={bell} alt='Bell Icon' />
        </section>

        {/* Content Section  */}
        <section className='comp-main-content'>
          <div className='comp-dash-renter-container'>
            <section className='chat-message-container'>
              <div className='move-left'>
                <ChatItemSender />
              </div>
              <div>
                <ChatItemReceiver />
              </div>{' '}
              <div className='move-left'>
                <ChatItemSender />
              </div>
              <div>
                <ChatItemReceiver />
              </div>
              {/* Mesage Box container  */}
              <div className='message-box-container'>
                <ChatMessageBox />
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AdminChatView
