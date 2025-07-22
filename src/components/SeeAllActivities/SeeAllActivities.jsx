import React from 'react'

import './SeeAllActivities.css'
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

import sendmoney from '../../assets/images/send-money.png'
import transactionhistory from '../../assets/images/transaction-history.png'
import WalletActionsCard from '../../utilities//WalletActionsCard'

import '../CompDashRenter/CompDashRenter.css'

function SeeAllActivities() {
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

        <div className='quick-actions'>
          <div className='quick-actions-header'>Quick Actions</div>
          <div className='quick-actions-content see-all-activities-quickactions'>
            <div>
              <WalletActionsCard img={chat} text={'See Chats'} />
            </div>
            <div>
              <WalletActionsCard img={sendmoney} text={'Wallet'} />
            </div>
            <div>
              <WalletActionsCard
                img={transactionhistory}
                text={'Transaction History'}
              />
            </div>
          </div>
        </div>

        {/* Content Section  */}
        <section className='comp-main-content'>
          <div className='comp-dash-renter-container'>
            <section className='reg-main-content'>
              {/* Tenants info  */}
              <div className='tenants-info-search'>
                <div className='transaction-history-title tenants-info-search-text'>
                  Apartment Information - Admin
                </div>
                <div className='back-to-wallet-div'>
                  <input
                    type='text'
                    className='textbox'
                    placeholder='Search...'
                  />
                </div>
              </div>

              <section className='comp-main-content'>
                {/* Wallet Header Section  */}
                <div className='wallet-header manage-tenants-header-section'>
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
                  {/* <div className='back-to-wallet-div manage-tenants-add-btn-div'>
                    <Button
                      text={'Add a New Tenant'}
                      bgcolor={'#fff'}
                      color={'#3357d0'}
                      img={plus}
                      borderColor={'#3357d0'}
                    />
                  </div> */}
                </div>

                {/* Transactions Section  */}
                <div className='transactions'>
                  <div className='transactions-records'>
                    <TenantRecordsHeader name={'Agent Name/ID'} />
                    <TenantRecords
                      recordType={'agent'}
                      name={'John Doe'}
                      ID={43384}
                      email={'john.doe@gmail.com'}
                      phone={'+234 803 123 4567'}
                      state={'Lagos'}
                      city={'Ikeja'}
                      amount={4500000}
                      type={'3 Bedroom Flat'}
                      sdate={'6th June 2025'}
                      edate={'6th July 2025'}
                      duration={'1 year'}
                      pytstatus={'Paid'}
                    />
                    <TenantRecords
                      recordType={'agent'}
                      name={'Isaac Newton'}
                      ID={43384}
                      email={'isaac.newton@gmail.com'}
                      phone={'+234 803 123 4537'}
                      state={'New York'}
                      city={'Alabama'}
                      amount={2500000}
                      type={'1 Bedroom Flat'}
                      sdate={'6th June 2025'}
                      edate={'6th July 2025'}
                      duration={'1 month'}
                      pytstatus={'Due'}
                    />
                    <TenantRecords
                      recordType={'agent'}
                      name={'Mark Zuckerberg'}
                      ID={43284}
                      email={'mark.zuck@gmail.com'}
                      phone={'+234 803 123 4567'}
                      state={'Portugal'}
                      city={'Ohio'}
                      amount={4500000}
                      type={'3 Bedroom Flat'}
                      sdate={'6th June 2025'}
                      edate={'6th July 2025'}
                      duration={'1 year'}
                      pytstatus={'Paid'}
                    />
                    <TenantRecords
                      recordType={'agent'}
                      name={'Donald Trump'}
                      ID={43381}
                      email={'donald.trump@gmail.com'}
                      phone={'+234 803 123 4567'}
                      state={'America'}
                      city={'Illinois'}
                      amount={2500000}
                      type={'2 Bedroom Flat'}
                      sdate={'6th June 2025'}
                      edate={'6th July 2025'}
                      duration={'1 year'}
                      pytstatus={'Due'}
                    />
                    <TenantRecords
                      recordType={'agent'}
                      name={'Baba Ijebu'}
                      ID={43384}
                      email={'baba.ijebu@gmail.com'}
                      phone={'+234 803 123 4567'}
                      state={'Ondo'}
                      city={'Akure'}
                      amount={4500000}
                      type={'3 Bedroom Flat'}
                      sdate={'6th June 2025'}
                      edate={'6th July 2025'}
                      duration={'1 year'}
                      pytstatus={'Paid'}
                    />
                    <TenantRecords
                      recordType={'agent'}
                      name={'Razak Akanji'}
                      ID={43384}
                      email={'razak.akanji@gmail.com'}
                      phone={'+234 803 123 4567'}
                      state={'Bayelsa'}
                      city={'Ikoli'}
                      amount={4500000}
                      type={'3 Bedroom Flat'}
                      sdate={'6th June 2025'}
                      edate={'6th July 2025'}
                      duration={'1 year'}
                      pytstatus={'Paid'}
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

export default SeeAllActivities
