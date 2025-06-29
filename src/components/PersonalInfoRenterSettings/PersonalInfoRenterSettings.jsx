import React from 'react'

import './PersonalInfoRenterSettings.css'
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
import profileimage from '../../assets/images/profile-image.png'

import '../CompDashRenter/CompDashRenter.css'
import WalletActionsCard from '../../utilities/WalletActionsCard'

function PersonalInfoRenterSettings() {
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
              <section className='comp-main-content renter-info-containter'>
                {/* Transactions Section  */}
                <div className='modal-content'>
                  <div className='renter-info-image-container'>
                    <img src={profileimage} alt='Renter Image' />
                  </div>
                  <form>
                    {/* Agent ID*/};
                    <div className='reg-data-div'>
                      <h5>Email</h5>
                      <div className='renter-settings-item'>
                        <input
                          type='text'
                          className='textbox'
                          placeholder='Enter Email'
                          defaultValue={'john.maxwell@yahoo.com'}
                        />

                        <div className='update-btn'>
                          <Button
                            text={'Update'}
                            bgcolor={'#fff'}
                            color={'#4361ee'}
                            fontSize='0.7rem'
                          />
                        </div>
                      </div>
                    </div>
                    {/* Phone Number */}
                    <div className='reg-data-div '>
                      <h5>Phone Number</h5>
                      <div className='renter-settings-item'>
                        <input
                          type='text'
                          className='textbox'
                          defaultValue={'+2347065234335'}
                        />
                        <div className='update-btn'>
                          <Button
                            text={'Update'}
                            bgcolor={'#fff'}
                            color={'#4361ee'}
                            fontSize='0.7rem'
                          />
                        </div>
                      </div>
                    </div>
                    {/* Address */}
                    <div className='reg-data-div'>
                      <h5>Address</h5>
                      <div className='renter-settings-item'>
                        <input
                          type='text'
                          className='textbox'
                          defaultValue={'West Alabama'}
                        />
                        <div className='update-btn'>
                          <Button
                            text={'Update'}
                            bgcolor={'#fff'}
                            color={'#4361ee'}
                            fontSize='0.7rem'
                          />
                        </div>
                      </div>
                    </div>
                    {/* Local Government */}
                    <div className='reg-data-div'>
                      <h5>Local Government</h5>
                      <div className='renter-settings-item'>
                        <input
                          type='text'
                          className='textbox'
                          defaultValue={'New York City'}
                        />
                        <div className='update-btn'>
                          <Button
                            text={'Update'}
                            bgcolor={'#fff'}
                            color={'#4361ee'}
                            fontSize='0.7rem'
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </section>
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PersonalInfoRenterSettings
