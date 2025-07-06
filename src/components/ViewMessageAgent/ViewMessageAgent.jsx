import React from 'react'

import './ViewMessageAgent.css'
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
import favorite from '../../assets/images/favorite.png'

import chat from '../../assets/images/chat.png'
import settings from '../../assets/images/settings.png'
import logout from '../../assets/images/logout.png'

import '../CompDashRenter/CompDashRenter.css'
import WalletActionsCard from '../../utilities/WalletActionsCard'
import { ChatItemSender, ChatItemReceiver } from '../../utilities/ChatItem'
import ChatMessageBox from '../../utilities/ChatMessageBox'

function ViewMessageAgent() {
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
        View Message Agent Header
        <section className='comp-get-started manage-tenants-header-text'>
          <h2>Tenant Chat with agent</h2>
          <p>Chat history between agent and tenant</p>
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
              <div>
                <ChatItemReceiver />
              </div>
              <div className='move-left'>
                <ChatItemSender />
              </div>
              <div>
                <ChatItemReceiver />
              </div>
              <div className='move-left'>
                <ChatItemSender />
              </div>
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

export default ViewMessageAgent
