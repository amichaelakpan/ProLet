import React from 'react'

import './AdminProfile.css'
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
import profileimage from '../../assets/images/profile-image.png'

import '../CompDashRenter/CompDashRenter.css'
import WalletActionsCard from '../../utilities/WalletActionsCard'

function AdminProfile() {
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
                      <h5>Admin Email</h5>
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

                      <div className='reg-data-div see-all-activities-btn'>
                        <Button
                          text={'See All Activities'}
                          bgcolor={'#3357d0'}
                          color={'#fff'}
                          width='100%'
                        />
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

export default AdminProfile
