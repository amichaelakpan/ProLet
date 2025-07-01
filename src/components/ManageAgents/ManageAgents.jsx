import React from 'react'

import './ManageAgents.css'
import '../RenterReg/RenterReg.css'
import Logo from '../Header/Logo'
import SidebarMenu from '../../utilities/SidebarMenu'
import Button from '../../utilities/Button'
import { AgentRecords } from '../../utilities/AgentRecords'
import { AgentRecordsHeader } from '../../utilities/AgentRecords'
import AgentListing from '../../utilities/AgentListing'

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
import plus from '../../assets/images/plus.png'

import '../CompDashRenter/CompDashRenter.css'

function ManageAgents() {
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
          <h2>Manage Agents</h2>
          <p>
            Manage Agents allows you to oversee and organize agents information
            efficiently. Add, edit and track agent details and payment records
            in one place for seamless property management
          </p>
        </section>

        {/* Content Section  */}
        <section className='comp-main-content'>
          <div className='comp-dash-renter-container'>
            <section className='reg-main-content'>
              {/* Tenants info  */}
              <div className='tenants-info-search'>
                <div className='transaction-history-title tenants-info-search-text'>
                  Agents Information
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
                  <div className='back-to-wallet-div manage-agents-add-btn-div'>
                    <Button
                      text={'Add a New Agent'}
                      bgcolor={'#fff'}
                      color={'#3357d0'}
                      img={plus}
                      borderColor={'#3357d0'}
                    />
                  </div>
                </div>

                {/* Transactions Section  */}
                <div className='transactions'>
                  <div className='transactions-records'>
                    <AgentRecordsHeader />
                    <AgentRecords
                      name={'John Doe'}
                      ID={43384}
                      email={'john.doe@gmail.com'}
                      phone={'+234 803 123 4567'}
                      state={'Lagos'}
                      city={'Ikeja'}
                      commission={4500000}
                      comm_date={'6th June 2025'}
                      comm_balance={45000}
                      renter_name={'Kola Adeyemi'}
                      renter_email={'kola.adeyemi@gmail.com'}
                      renter_phone={'+234 803 123 4567'}
                      pytstatus={'viewappointment'}
                    />
                    <AgentRecords
                      name={'Isaac Newton'}
                      ID={43384}
                      email={'isaac.newton@gmail.com'}
                      phone={'+234 803 123 4537'}
                      state={'New York'}
                      city={'Alabama'}
                      commission={2500000}
                      comm_date={'6th June 2025'}
                      comm_balance={'---'}
                      renter_name={'Jude Montgomery'}
                      renter_email={'jude.montgomery@gmail.com'}
                      renter_phone={'+234 803 333 4567'}
                      pytstatus={'viewappointment'}
                    />
                    <AgentRecords
                      name={'Mark Zuckerberg'}
                      ID={43284}
                      email={'mark.zuck@gmail.com'}
                      phone={'+234 803 123 4567'}
                      state={'Portugal'}
                      city={'Ohio'}
                      commission={4500000}
                      comm_date={'6th June 2025'}
                      comm_balance={'---'}
                      renter_name={'Titus Abalaka'}
                      renter_email={'titus.abalaka@gmail.com'}
                      renter_phone={'+234 803 123 4567'}
                      pytstatus={'viewappointment'}
                    />
                    <AgentRecords
                      name={'Donald Trump'}
                      ID={43381}
                      email={'donald.trump@gmail.com'}
                      phone={'+234 803 123 4567'}
                      state={'America'}
                      city={'Illinois'}
                      commission={2500000}
                      comm_date={'6th June 2025'}
                      comm_balance={150000}
                      renter_name={'Spruce Woods'}
                      renter_email={'spruce.woods@yahoo.com'}
                      renter_phone={'+234 803 123 7867'}
                      pytstatus={'viewappointment'}
                    />
                    <AgentRecords
                      name={'Baba Ijebu'}
                      ID={43384}
                      email={'baba.ijebu@gmail.com'}
                      phone={'+234 803 123 4567'}
                      state={'Ondo'}
                      city={'Akure'}
                      commission={'---'}
                      comm_date={'---'}
                      comm_balance={'---'}
                      renter_name={'Theresa Brainard'}
                      renter_email={'theresa.brainard@gmail.com'}
                      renter_phone={'+234 803 123 4567'}
                      pytstatus={'viewappointment'}
                    />
                    <AgentRecords
                      name={'Razak Akanji'}
                      ID={43384}
                      email={'razak.akanji@gmail.com'}
                      phone={'+234 803 123 4567'}
                      state={'Bayelsa'}
                      city={'Ikoli'}
                      commission={'---'}
                      comm_date={'---'}
                      comm_balance={'---'}
                      renter_name={'---'}
                      renter_email={'---'}
                      renter_phone={'---'}
                      pytstatus={'viewappointment'}
                    />
                  </div>
                </div>

                {/* Agent Listing Section */}
                <section className='agent-listing-section'>
                  <AgentListing />
                </section>
              </section>
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ManageAgents
