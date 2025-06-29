import React, { useState } from 'react'
import './ReplaceAgent.css'
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

import { SuccessfulPrompt } from '../../utilities/ConfirmationPrompt'

function ReplaceAgent() {
  // Code Block to handle File Upload

  const [showSuccess, setShowSuccess] = useState(false)
  const closeModal = () => setShowSuccess(false)

  const handleCloseDialog = (e) => {
    e.preventDefault()
    closeModal() // if the dialog is open, close it

    showSuccess && setShowSuccess(false)
  }

  const handleSuccessClick = () => {
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
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

        {/* Content Section  */}
        <section className='comp-main-content'>
          <div className='wallet-container'>
            {/* Prompt to show success message  */}
            {showSuccess && (
              <SuccessfulPrompt
                message={'Your agent has been successfully fired.'}
                handleCloseModal={handleCloseDialog}
                btnText={'Return to Dashboard'}
              />
            )}

            <h2>Replace Agent</h2>
            <p className='bvn-prompt-text'>
              Enter another agent ID to replace the one you are about to fire.
            </p>
            {/* NIN Verification */}
            <div className='reg-data-div'>
              <input
                type='number'
                className='textbox enter-bvn'
                placeholder='47633'
              />
            </div>
            <div>
              <Button
                text={`Confirm`}
                bgcolor={'#3357D0'}
                color='#fff'
                borderColor={'#fff'}
                width='12rem'
                onClick={handleSuccessClick}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ReplaceAgent
