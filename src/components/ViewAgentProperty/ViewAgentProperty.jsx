import React from 'react'

import './ViewAgentProperty.css'
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
import landlordpropimage1 from '../../assets/images/landlord-prop-image1.png'
import landlordpropimage2 from '../../assets/images/landlord-prop-image2.png'
import landlordpropimage3 from '../../assets/images/landlord-prop-image3.png'
import landlordmapimage from '../../assets/images/landlord-map-image.png'

import '../CompDashRenter/CompDashRenter.css'
import WalletActionsCard from '../../utilities/WalletActionsCard'

function ViewAgentProperty() {
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
                {/* Transactions Section  */}
                <div className='transactions landlord-view-prop'>
                  <section className='landlord-image-main'>
                    <img
                      className='main-image'
                      src={landlordpropimage1}
                      alt='Landlord main image'
                    />
                  </section>
                  <section className='landlord-image-collection'>
                    <img
                      className='main-image'
                      src={landlordpropimage2}
                      alt='Landlord main image'
                    />
                    <img
                      className='main-image'
                      src={landlordpropimage3}
                      alt='Landlord main image'
                    />
                    <img
                      className='main-image'
                      src={landlordpropimage2}
                      alt='Landlord main image'
                    />
                  </section>
                  <div className='property-for-rent-header'>
                    <h4>Property for rent location</h4>
                  </div>
                  <section className='landlord-map-section'>
                    <img src={landlordmapimage} alt='Map image' />

                    <div className='card-details landlord-prop-details'>
                      <h4>4 bedroom fully detached duplex</h4>
                      <div className='card-details-price landlord-prop-details-price'>
                        ₦100,000
                        <span className='prop-details-per-mont'>
                          /month
                        </span>{' '}
                      </div>
                      <div className='prop-details-desciption'>
                        <h5>Description</h5>
                        <p>
                          Exclusively furnished 4 bedrooms fully detached duplex
                          with penthouse for rent in a secure and peaceful
                          estate at Gwarinpa Estate on a tarred road for N100k
                          monthly
                        </p>
                      </div>

                      <div className='verify-btn-container landlord-prop-details-btn-div'>
                        <div className='go-back-div'>
                          <Button
                            text={`Chat Landlord`}
                            bgcolor={'#3357D0'}
                            color='#fff'
                            borderColor={'#fff'}
                            width='100%'
                          />
                        </div>
                        <div className='go-back-div'>
                          <Button
                            text={`Terminate Contract`}
                            bgcolor={'#3357D0'}
                            color='#fff'
                            borderColor={'#fff'}
                            width='100%'
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </section>
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ViewAgentProperty
