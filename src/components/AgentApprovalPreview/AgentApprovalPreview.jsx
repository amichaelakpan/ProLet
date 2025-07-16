import React, { useState } from 'react'

import './AgentApprovalPreview.css'
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
import landlordpropimage1 from '../../assets/images/landlord-prop-image1.png'
import landlordpropimage2 from '../../assets/images/landlord-prop-image2.png'
import landlordpropimage3 from '../../assets/images/landlord-prop-image3.png'
import landlordmapimage from '../../assets/images/landlord-map-image.png'

import '../CompDashRenter/CompDashRenter.css'
import WalletActionsCard from '../../utilities/WalletActionsCard'

const RejectAgreementForm = ({
  handleSubmit,
  closeModal,
  handleRejectAgreement,
}) => {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <div className='terminate-rent-header pay-renter-header'>
          <div className='transaction-history-title pay-renter-title'>
            Reasons for Rejection
          </div>
          <div className='cancel-agreement-btn'>
            <Button
              text={'Cancel'}
              bgcolor={'#e5ebff'}
              color={'#3357d0'}
              onClick={closeModal}
            />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='reg-data-div'>
            <h5>Reasons for rejection (if any)</h5>
            <textarea
              className='textarea'
              placeholder='Enter your message here'
            ></textarea>
          </div>
          <div className='go-to-wallet pay-renter-action-btns'>
            <Button
              text={`Confirm`}
              bgcolor={'#3357D0'}
              color='#fff'
              borderColor={'#fff'}
              width='100%'
              onClick={handleRejectAgreement}
            />
          </div>
          {/* <div className='modal-actions  pay-renter-action-btns'>
            <button type='submit'>Submit</button>
            <button type='button' onClick={closeModal}>
              Cancel
            </button>
          </div> */}
        </form>
      </div>
    </div>
  )
}

function AgentApprovalPreview() {
  // Code Block to handle File Upload
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  // handle signed agreement
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    alert('Signed Successfully 👍')
    closeModal()
  }

  // handle reject agreement
  const handleRejectAgreement = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    alert('Property Successfully Rejected ❌')
    closeModal()
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
            <SidebarMenu img={market} text={'See Agreement'} />
          </div>
          <div>
            <SidebarMenu img={agreement} text={'Approvals'} />
          </div>
          <div>
            <SidebarMenu img={agreement} text={'Check Request'} />
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
          {isOpen && (
            <RejectAgreementForm
              handleSubmit={handleSubmit}
              closeModal={closeModal}
              handleRejectAgreement={handleRejectAgreement}
            />
          )}
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
                            text={`Approve`}
                            bgcolor={'#3357D0'}
                            color='#fff'
                            borderColor={'#fff'}
                            width='100%'
                          />
                        </div>
                        <div className='go-back-div'>
                          <Button
                            text={`Reject`}
                            bgcolor={'#3357D0'}
                            color='#fff'
                            borderColor={'#fff'}
                            width='100%'
                            onClick={openModal}
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

export default AgentApprovalPreview
