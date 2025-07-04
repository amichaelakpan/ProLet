import { useState } from 'react'
import React from 'react'

import './AgentOverview.css'
import '../RenterReg/RenterReg.css'
import Logo from '../Header/Logo'
import SidebarMenu from '../../utilities/SidebarMenu'
import Button from '../../utilities/Button'
import { AgentRecords } from '../../utilities/AgentRecords'
import { AgentRecordsHeader } from '../../utilities/AgentRecords'
import AgentListing from '../../utilities/AgentListing'
import Property from '../../utilities/Property'

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
import property1 from '../../assets/images/property-1.jpg'
import property2 from '../../assets/images/property-2.jpg'
import property3 from '../../assets/images/property-3.jpg'
import property4 from '../../assets/images/property-4.jpg'
import property5 from '../../assets/images/property-5.jpg'
import property6 from '../../assets/images/property-6.jpg'
import property7 from '../../assets/images/property-7.jpg'
import property8 from '../../assets/images/property-8.jpg'
import property9 from '../../assets/images/property-9.jpg'
import property10 from '../../assets/images/property-10.jpg'
import property11 from '../../assets/images/property-11.jpg'
import property12 from '../../assets/images/property-12.jpg'
import property18 from '../../assets/images/property-18.png'
import star from '../../assets/images/star.png'

import '../CompDashRenter/CompDashRenter.css'
import {
  ConfirmationPrompt,
  SuccessfulPrompt,
} from '../../utilities/ConfirmationPrompt'

function AgentOverview() {
  // state to handle dialog visibility
  const [showDialog, setShowDialog] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  // const [isOpen, setIsOpen] = useState(false)
  // const openModal = () => setIsOpen(true)
  const closeModal = () => setShowDialog(false)

  const handleCloseDialog = (e) => {
    e.preventDefault()
    closeModal()

    // if the dialog is open, close it
    showSuccess && setShowSuccess(false)
  }

  const handlePropertyClick = () => {
    setShowDialog(true)
  }

  const handleSuccessClick = () => {
    setShowSuccess(true)
    // setTimeout(() => {
    //   setShowSuccess(false)
    // }, 3000)
  }

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
          <h2>Agent Overview</h2>
          <p>
            THe Agent Overview provides a comprehensive profile of the agent,
            showcasting their experience, expertise and portfolio of properties
            handled
          </p>
        </section>

        {/* Content Section  */}
        <section className='comp-main-content'>
          <div className='comp-dash-renter-container'>
            <section className='reg-main-content'>
              <div className='agent-overview-head-section'>
                <div className='agent-overview-head-section-image'>
                  <img src={property18} alt='Agent Property' />
                </div>
                <div className='agent-overview-info'>
                  <p>
                    <strong>Name: </strong> Paul Gribbs
                  </p>
                  <p>
                    <strong>Email Address: </strong> paul.gribbs@gmail.com
                  </p>
                  <p>
                    <strong>Phone Number: </strong> 09034434857
                  </p>
                  <p>
                    <strong>State: </strong> Port Harcourt
                  </p>
                  <p>
                    <strong>Local Government: </strong>Epe
                  </p>
                  <section className='agent-overview-ratings'>
                    <img src={star} alt='Star' />
                    <div>
                      <strong>4.5</strong>
                    </div>
                    <p className='agent-rating-text'>(Agent Rating)</p>
                  </section>
                </div>
              </div>

              {/* Agent Listing Section */}
              <section className='agent-listing-section'>
                {/* Promt to appoint agent to manage property */}
                {showDialog && (
                  <ConfirmationPrompt
                    message={
                      'This agent is about to be added to manage this property. Are you sure you want to add this agent?'
                    }
                    handleCloseModal={handleCloseDialog}
                    handleClick={handlePropertyClick}
                    handleSuccessClick={handleSuccessClick}
                    img={''}
                    headerText={'Appoint Agent'}
                    messageColor={'#000'}
                    yes='Confirm Appointment'
                    no='Cancel'
                  />
                )}

                {/* Prompt to show success message */}
                {showSuccess && (
                  <SuccessfulPrompt
                    message={
                      'Your appointment has been successfully placed. Please keep your eye on your notification or chat for feedback from your agent'
                    }
                    handleCloseModal={handleCloseDialog}
                  />
                )}
                <AgentListing
                  headerText={'Add Agent to Manage your Properties'}
                  bodyText={
                    'By adding an agent, you can streamline property transactions, ensure expert handling of listings, and maximize exposure in the market. The assigned agent will assist with selling, renting, and maintaining your properties while providing valuable insights and support throughout the process. Take the hassle out of property management by entrusting it to a skilled agent'
                  }
                  btnText={'Appoint Agent'}
                  onClick={handlePropertyClick}
                />
              </section>

              <div className='comp-dash-renter-content-1 agent-overview-header'>
                <div>
                  <h2>Portfolio</h2>
                  <p>Some of the properties managed by the agent</p>
                </div>
              </div>

              {/* Agent Portfolio Section */}
              <div className='comp-dash-renter-content-3 agent-overview-properties'>
                <div>
                  <Property img={property1} />
                </div>
                <div>
                  <Property img={property2} />
                </div>
                <div>
                  <Property img={property3} />
                </div>
                <div>
                  <Property img={property4} />
                </div>
                <div>
                  <Property img={property5} />
                </div>
                <div>
                  <Property img={property6} />
                </div>
                <div>
                  <Property img={property7} />
                </div>
                <div>
                  <Property img={property8} />
                </div>
                <div>
                  <Property img={property9} />
                </div>

                <div>
                  <Property img={property10} />
                </div>
                <div>
                  <Property img={property11} />
                </div>
                <div>
                  <Property img={property12} />
                </div>
              </div>

              {/* Agent Listing Section */}
              <section className='agent-listing-section'>
                <AgentListing
                  headerText={'Add Agent to Manage your Properties'}
                  bodyText={
                    'By adding an agent, you can streamline property transactions, ensure expert handling of listings, and maximize exposure in the market. The assigned agent will assist with selling, renting, and maintaining your properties while providing valuable insights and support throughout the process. Take the hassle out of property management by entrusting it to a skilled agent'
                  }
                  btnText={'Appoint Agent'}
                  onClick={handlePropertyClick}
                />
              </section>
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AgentOverview
