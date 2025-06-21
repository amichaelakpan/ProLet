import React from 'react'

import './TerminateRent.css'
import Logo from '../Header/Logo'
import SidebarMenu from '../../utilities/SidebarMenu'
import Button from '../../utilities/Button'

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
import Property from '../../utilities/Property'

function TerminateRent() {
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
          <div className='terminate-rent-header'>
            <div className='transaction-history-title'>Terminate Rent </div>
            <div className='cancel-agreement-btn'>
              <Button text={'Cancel'} bgcolor={'#e5ebff'} color={'#3357d0'} />
            </div>
          </div>

          <div className='comp-dash-renter-container'>
            <section className='reg-main-content'>
              <h3>Fill in Information</h3>
              <div className='renter-reg-main'>
                {/* Gender  */}
                <div className='reg-data-div'>
                  <h5>Reason for fire</h5>
                  <select name='gender' id=''>
                    <option value='1'>Fraud</option>
                    <option value='2'>Misunderstanding</option>
                    <option value='2'>Court Order</option>
                    <option value='2'>Unauthenticated</option>
                  </select>
                </div>

                {/* Tenant Name*/}
                <div className='reg-data-div'>
                  <h5>Tenant Name Name</h5>
                  <input
                    type='text'
                    className='textbox'
                    placeholder='Enter Tenant Name'
                  />
                </div>

                {/* Tenant ID*/}
                <div className='reg-data-div'>
                  <h5>Tenant ID</h5>
                  <input
                    type='number'
                    className='textbox'
                    placeholder='Enter Tenant ID'
                  />
                </div>

                {/* Date of Fire */}
                <div className='reg-data-div'>
                  <h5>Date of Fire</h5>
                  <input type='date' className='date-picker' />
                </div>

                {/* Home or Office Address  */}
                <div className='reg-data-div'>
                  <h5>Reply Message Tenant</h5>
                  <textarea
                    className='textarea'
                    placeholder='Enter your message here'
                  ></textarea>
                </div>

                <div className='reg-submit-div'>
                  <Button
                    text={`Send`}
                    bgcolor={'#3357D0'}
                    color='#fff'
                    borderColor={'#fff'}
                    width='12rem'
                  />
                </div>

                {/* End of Div  */}
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TerminateRent
