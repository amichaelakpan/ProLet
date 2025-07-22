import React from 'react'

import './UsersWallet.css'
import '../RenterReg/RenterReg.css'
import Logo from '../Header/Logo'
import SidebarMenu from '../../utilities/SidebarMenu'
import Button from '../../utilities/Button'
import { TenantRecords } from '../../utilities/TenantRecords'
import { TenantRecordsHeader } from '../../utilities/TenantRecords'

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

function UsersWallet() {
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
          <h3>Dashboard</h3>
          <img src={dashboardimg} alt='Dashboard image' />
          <p>Uwem Stack</p>
          <img src={bell} alt='Bell Icon' />
        </section>

        <section className='comp-get-started manage-tenants-header-text'>
          <h2>Users Wallets</h2>
          {/* <p>
            Manage Tenants allows you to oversee and organize tenant information
            efficiently. Add, edit and track tenant details, lease agreements
            and payment records in one place for seamless property management
          </p> */}
        </section>

        {/* Content Section  */}
        <section className='comp-main-content'>
          <div className='comp-dash-renter-container'>
            <section className='reg-main-content'>
              {/* Tenants info  */}
              {/* <div className='tenants-info-search'>
                <div className='transaction-history-title tenants-info-search-text'>
                  Tenants Information
                </div>
                <div className='back-to-wallet-div'>
                  <input
                    type='text'
                    className='textbox'
                    placeholder='Search...'
                  />
                </div>
              </div> */}

              <section className='comp-main-content'>
                {/* Wallet Header Section  */}
                {/* <div className='wallet-header manage-tenants-header-section'>
                  <div className='transaction-history-title tenant-prop-options'>
                    <div>
                      <Button
                        text={'Apartments'}
                        bgcolor={'#e5ebff'}
                        color={'#3357d0'}
                      />
                    </div>
                    <div>
                      <Button
                        text={'Shortlet'}
                        bgcolor={'#e5ebff'}
                        color={'#3357d0'}
                      />
                    </div>
                    <div>
                      <Button
                        text={'Studios'}
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
                  <div className='back-to-wallet-div manage-tenants-add-btn-div'>
                    <Button
                      text={'Add a New Tenant'}
                      bgcolor={'#fff'}
                      color={'#3357d0'}
                      img={plus}
                      borderColor={'#3357d0'}
                    />
                  </div>
                </div> */}

                {/* Transactions Section  */}
                <div className='transactions'>
                  <div className='transactions-records'>
                    <TenantRecordsHeader
                      name={'Name'}
                      email={'User Details'}
                      duration={''}
                      pytstatus={'Action'}
                      sedate={'Creation Date'}
                    />
                    <TenantRecords
                      name={'John Doe'}
                      email={'john.doe@gmail.com'}
                      state={'Lagos'}
                      city={'Ikeja'}
                      amount={4500000}
                      type={'3 Bedroom Flat'}
                      sdate={'6th June 2025'}
                      pytstatus={'View'}
                    />
                    <TenantRecords
                      name={'Isaac Newton'}
                      email={'isaac.newton@gmail.com'}
                      state={'New York'}
                      city={'Alabama'}
                      amount={2500000}
                      type={'1 Bedroom Flat'}
                      sdate={'6th June 2025'}
                      pytstatus={'View'}
                    />
                    <TenantRecords
                      name={'Mark Zuckerberg'}
                      email={'mark.zuck@gmail.com'}
                      state={'Portugal'}
                      city={'Ohio'}
                      amount={4500000}
                      type={'3 Bedroom Flat'}
                      sdate={'6th June 2025'}
                      pytstatus={'View'}
                    />
                    <TenantRecords
                      name={'Donald Trump'}
                      email={'donald.trump@gmail.com'}
                      state={'America'}
                      city={'Illinois'}
                      amount={2500000}
                      type={'2 Bedroom Flat'}
                      sdate={'6th June 2025'}
                      pytstatus={'View'}
                    />
                    <TenantRecords
                      name={'Baba Ijebu'}
                      email={'baba.ijebu@gmail.com'}
                      state={'Ondo'}
                      city={'Akure'}
                      amount={4500000}
                      type={'3 Bedroom Flat'}
                      sdate={'6th June 2025'}
                      pytstatus={'View'}
                    />
                    <TenantRecords
                      name={'Razak Akanji'}
                      email={'razak.akanji@gmail.com'}
                      state={'Bayelsa'}
                      city={'Ikoli'}
                      amount={4500000}
                      type={'3 Bedroom Flat'}
                      sdate={'6th June 2025'}
                      pytstatus={'View'}
                    />
                  </div>
                </div>
              </section>
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}

export default UsersWallet
