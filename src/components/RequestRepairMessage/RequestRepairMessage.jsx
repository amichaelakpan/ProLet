import React from 'react'

import './RequestRepairMessage.css'
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
import estate from '../../assets/images/estate.png'
import agreement from '../../assets/images/agreement.png'
import information from '../../assets/images/information.png'

import chat from '../../assets/images/chat.png'
import settings from '../../assets/images/settings.png'
import logout from '../../assets/images/logout.png'
import faultyitem from '../../assets/images/faulty-item.png'

import '../CompDashRenter/CompDashRenter.css'
import WalletActionsCard from '../../utilities/WalletActionsCard'

function RequestRepairMessage() {
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

        <section className='comp-get-started manage-tenants-header-text'>
          <h2>Request for repair on apartment</h2>
          <p>
            This section is for tenants to report any maintenance or repair
            issues in their apartment. It includes details such as the problem
            description, location, urgency level, and contact information.
            Prompt reporting ensures timely repairs and a well-maintained living
            environment.
          </p>
        </section>

        {/* Content Section  */}
        <section className='comp-main-content'>
          <div className='comp-dash-renter-container'>
            <section className='reg-main-content'>
              <section className='comp-main-content'>
                {/* Transactions Section  */}
                <div className='request-repair-message-from-tenant'>
                  <h3>Message from Jerome Bell</h3>
                  <p>
                    Dear Landlord, <br />I hope you are doing well. I am writing
                    to inform you about a maintenance issue in my apartment{' '}
                    <strong>No 8, Gate Way Estate, Gwarinpa, Abuja</strong>
                    , that requires urgent attention. <br />
                    <strong> Issue:</strong> The kitchen sink is leaking and The
                    heating system is not working. <br />
                    <strong> Location: </strong>
                    No 8, Gate Way Estate, Gwarinpa, Abuja <br />
                    <strong> Details: </strong>
                    The sink has been leaking for the past few days, and the
                    water is accumulating under the cabinet. <br />
                    <strong> Urgency: </strong> It needs urgent attention.
                    Please let me know when a maintenance team can come to
                    inspect and fix the issue. I appreciate your prompt
                    assistance.
                  </p>
                </div>

                <div className='request-repair-images'>
                  <h3>Attached Photo</h3>
                  <p>Photo of the condition of the issues</p>
                  <div className='repair-images-collection'>
                    <img src={faultyitem} alt='Faulty Item' />
                    <img src={faultyitem} alt='Faulty Item' />
                    <img src={faultyitem} alt='Faulty Item' />
                    <img src={faultyitem} alt='Faulty Item' />
                    <img src={faultyitem} alt='Faulty Item' />
                  </div>
                </div>

                <div className='request-repair-reply-to-tenant'>
                  <div className='reg-data-div'>
                    <h3>Reply message to Tenant</h3>
                    <textarea
                      className='textarea reply-tenant-textarea'
                      placeholder='Enter your reply message here...'
                    ></textarea>
                  </div>

                  <div className='reg-submit-div reply-tenant-btn'>
                    <Button
                      text={`Send Message`}
                      bgcolor={'#3357D0'}
                      color='#fff'
                      borderColor={'#fff'}
                      width='100%'
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

export default RequestRepairMessage
