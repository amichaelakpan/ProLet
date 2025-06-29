import React from 'react'

import './FireAgentLetter.css'
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

function FireAgentLetter() {
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

        {/* Content Section  */}
        <section className='comp-main-content'>
          <div className='comp-dash-renter-container'>
            <section className='reg-main-content'>
              <section className='comp-main-content'>
                {/* Wallet Header Section  */}
                <div className='wallet-header agreement-title-header'>
                  <div className='transaction-history-title'>
                    Fire Agent Letter
                  </div>
                  <div className='cancel-agreement-btn'>
                    <Button
                      text={'Cancel'}
                      bgcolor={'#e5ebff'}
                      color={'#3357d0'}
                    />
                  </div>
                </div>
                {/* Transactions Section  */}
                <section className='agreement-doc'>
                  {/* Agreement Header  */}
                  <div className='agreement-header'>
                    <h3>
                      <strong> Subject: Termination of Agreement </strong>{' '}
                    </h3>
                    <p>
                      Dear Daniel, <br />
                      I hope this letter finds you well. After careful
                      consideration, we regret to inform you that we are
                      terminating our agency agreement with you, effective [Last
                      Working Date, typically as per contract terms]. This
                      decision was made due to [briefly state reason, e.g.,
                      failure to meet agreed-upon expectations, breach of
                      contract, or company restructuring]. While we appreciate
                      your efforts and contributions, we believe it is in our
                      best interest to move forward in a different direction.
                      Please ensure that all outstanding matters, including
                      [mention any pending work, return of company property, or
                      financial settlements], are completed by [final deadline].
                      We will facilitate a smooth transition and provide any
                      necessary guidance during this period. We appreciate your
                      past collaboration and wish you success in your future
                      endeavors. If you have any questions or require
                      clarification, feel free to reach out. <br />
                      Sincerely, <br />
                      [Your Name] <br />
                      [Your Position] <br />
                      [Your Company Name] <br />
                      Let me know if you need any adjustments to the tone or
                      details!
                    </p>
                  </div>

                  <div className='verify-btn-container preview-agreement-btn-div'>
                    <div className='go-back-div'>
                      <Button
                        text={`Send`}
                        bgcolor={'#3357D0'}
                        color='#fff'
                        borderColor={'#fff'}
                        width='100%'
                      />
                    </div>
                    <div className='create-wallet-div'>
                      <Button
                        text={`Edit`}
                        bgcolor={'##c7ddff'}
                        color='#3357D0'
                        borderColor={'#fff'}
                        width='100%'
                      />
                    </div>
                  </div>
                </section>
              </section>
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FireAgentLetter
