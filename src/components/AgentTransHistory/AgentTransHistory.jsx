import React from 'react'

import './AgentTransHistory.css'
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
import estate from '../../assets/images/estate.png'
import agreement from '../../assets/images/agreement.png'
import information from '../../assets/images/information.png'

import chat from '../../assets/images/chat.png'
import settings from '../../assets/images/settings.png'
import logout from '../../assets/images/logout.png'

import '../CompDashRenter/CompDashRenter.css'
import WalletActionsCard from '../../utilities/WalletActionsCard'

function AgentTransHistory() {
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
            <SidebarMenu img={market} text={'Manage Tenants'} />
          </div>
          <div>
            <SidebarMenu img={estate} text={'Manage Agents'} />
          </div>
          <div>
            <SidebarMenu img={agreement} text={'Agreement'} />
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

      <div className='comp-reg-main'>
        {/* Title Section  */}
        <section className='comp-main-titlebar'>
          <h3>Dashboard</h3>
          <img src={dashboardimg} alt='Dashboard image' />
          <p>Uwem Stack</p>
          <img src={bell} alt='Bell Icon' />
        </section>

        <section className='comp-get-started'>
          <h2>Agent Transaction History</h2>
        </section>

        {/* Content Section  */}
        <section className='comp-main-content'>
          <div className='comp-dash-renter-container'>
            <section className='reg-main-content'>
              <section className='comp-main-content'>
                {/* Wallet Header Section  */}
                <div className='wallet-header'>
                  <div className='transaction-history-title'>Transactions</div>
                  <div className='back-to-wallet-div'>
                    <Button
                      text={'Back to wallet'}
                      bgcolor={'#e5ebff'}
                      color={'#3357d0'}
                    />
                  </div>
                </div>

                {/* Transactions Section  */}
                <div className='transactions'>
                  <div className='transactions-records'>
                    <RecordsHeader />
                    <Records
                      date={'5th June 2025'}
                      purpose={'Rent Payment'}
                      recipient={'Olanrewaju Paul'}
                      amount={'3,000,000'}
                      type={'Fund Wallet'}
                      status={'successful'}
                    />
                    <Records
                      date={'6th July 2025'}
                      purpose={'Rent Payment'}
                      recipient={'Elaine Brooks'}
                      amount={'1,500,000'}
                      type={'Payment to Landlord'}
                      status={'successful'}
                    />
                    <Records
                      date={'23rd February 2024'}
                      purpose={'Feeding'}
                      recipient={'Erika Dixon'}
                      amount={'30,000'}
                      type={'Transfer to account'}
                      status={'failed'}
                    />
                    <Records
                      date={'6th March 2025'}
                      purpose={'Rent Payment'}
                      recipient={'Shannon Green'}
                      amount={'2,800,000'}
                      type={'Direct from Wallet'}
                      status={'successful'}
                    />
                    <Records
                      date={'1st November 2024'}
                      purpose={'Refund Payment'}
                      recipient={'Nell Peters'}
                      amount={'3,000,000'}
                      type={'Transfer to account'}
                      status={'failed'}
                    />
                    <Records
                      date={'13th April 2025'}
                      purpose={'Rent Payment'}
                      recipient={'Candy Melton'}
                      amount={'2,300,000'}
                      type={'Fund Wallet'}
                      status={'successful'}
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

export default AgentTransHistory
