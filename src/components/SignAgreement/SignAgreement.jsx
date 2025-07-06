import React, { useState } from 'react'

import './SignAgreement.css'
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
import favorite from '../../assets/images/favorite.png'

import chat from '../../assets/images/chat.png'
import settings from '../../assets/images/settings.png'
import logout from '../../assets/images/logout.png'

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
            Reject Agreement
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
            <h5>Reasons for rejection</h5>
            <textarea
              className='textarea'
              placeholder='Enter your message here'
            ></textarea>
          </div>
          <div className='go-to-wallet pay-renter-action-btns'>
            <Button
              text={`Send`}
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

function SignAgreement() {
  // Code Block to handle File Upload
  // show action menu for tenant records
  // const [showMenu, setShowMenu] = useState(false)
  // const menuRef = useRef()
  // const toggleMenu = () => {
  //   setShowMenu((prev) => !prev)
  // }

  // Reference for the modal dialog

  // Modal state management
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  // const modalRef = useRef()

  // Close menu when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setShowMenu(false)
  //     }
  //   }
  //   document.addEventListener('mousedown', handleClickOutside)
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside)
  //   }
  // }, [])

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
    alert('Agreement Successfully Rejected ❌')
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
            <SidebarMenu img={market} text={'My Apartment'} />
          </div>

          <div>
            <SidebarMenu img={agreement} text={'Sign Agreement'} />
          </div>
          <div>
            <SidebarMenu img={chat} text={'Chat'} />
          </div>
          <div>
            <SidebarMenu img={favorite} text={'Favorite'} />
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

        <section className='comp-get-started'>
          <h1 className='preview-agreement-title'>
            Preview Agreement and Sign...
          </h1>
          <h3>Preview Agreement and Sign before sending to landlord</h3>
        </section>

        {/* Content Section  */}
        <section className='comp-main-content'>
          <div className='comp-dash-renter-container'>
            <section className='reg-main-content'>
              <section className='comp-main-content'>
                {/* Open rejection form */}
                {isOpen && (
                  <RejectAgreementForm
                    handleRejectAgreement={handleRejectAgreement}
                    closeModal={closeModal}
                  />
                )}
                {/* Wallet Header Section  */}
                <div className='wallet-header agreement-title-header'>
                  <div className='transaction-history-title'>
                    Agreement Document
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
                    <h3>Tenancy Agreement</h3>
                    <p>
                      The tenancy agreement is made on this ___ day of ____ 20__
                      between Mr. Bell, residing at [Landlord's Address], herein
                      after referred to as the "Landlord" AND <br /> Mr Tony
                      residing at [Tenant's Address], herein after referred to
                      as the "Tenant". Both parties agree as follows:
                    </p>
                  </div>

                  {/* Terms of Agreement  */}
                  <ol>
                    {/* Propert Details  */}
                    <li>
                      <h3>Property Details</h3>
                      <p>
                        The Landlord agrees to let and the Tenant agrees to rent
                        a two-bedroom flat located at [Property Address] (herein
                        after referred to as the "Property")
                      </p>
                    </li>

                    {/* Terms of Tenancy */}
                    <li>
                      <h3>Terms of Tenancy</h3>
                      <p>
                        The tenancy shall commence on [Start Date] and continue
                        for a fixed term of [Duration] months, ending on [End
                        Date] unless terminated earlier in accordance with the
                        terms of this Agreement
                      </p>
                    </li>

                    {/* Rent Payment */}
                    <li>
                      <h3>Rent Payment</h3>

                      <ul className='agreement-sub-terms'>
                        <li>
                          The Tenant agrees to pay the Landlord a monthly rent
                          of [Rent Amount]
                        </li>
                        <li>
                          Rent shall be paid on or before the [Due Date] of each
                          month
                        </li>
                        <li>
                          Rent shall be paid via [Payment Method] to the
                          Landlord's designated account
                        </li>
                      </ul>
                    </li>

                    {/* Security Deposit  */}
                    <li>
                      <h3>Security Deposit</h3>

                      <ul className='agreement-sub-terms'>
                        <li>
                          The Tenant shall pay a security deposit of [Deposit
                          Amount] before moving in.
                        </li>
                        <li>
                          The security deposit shall be held by the Landlord and
                          refunded to the Tenant at the end of the tenancy,
                          subject to deductions for any damages or unpaid rent.
                        </li>
                      </ul>
                    </li>

                    {/* Utilities and Bills  */}
                    <li>
                      <h3>Utilities and Bills</h3>

                      <ul className='agreement-sub-terms'>
                        <li>
                          The Tenant shall be responsible for the payment of
                          [list utilities such as electricity, water, gas,
                          internet, etc.] unless otherwise agreed
                        </li>
                        <li>
                          The Landlord shall be responsible for [list any
                          utilities paid by the Landlord]
                        </li>
                      </ul>
                    </li>

                    {/* Maintenance and Repairs  */}
                    <li>
                      <h3>Maintenance and Repairs </h3>

                      <ul className='agreement-sub-terms'>
                        <li>
                          The Tenant shall keep the Property clean and in good
                          condition.
                        </li>
                        <li>
                          The Landlord shall be responsible for major structural
                          repairs.
                        </li>
                        <li>
                          The Tenant shall promptly report any necessary repairs
                          to the Landlord.
                        </li>
                      </ul>
                    </li>

                    {/* Use of Property */}
                    <li>
                      <h3>Use of Property</h3>

                      <ul className='agreement-sub-terms'>
                        <li>
                          The Tenant shall use the Property only as a private
                          residence
                        </li>
                        <li>
                          The Tenant shall not sublet, assign, or transfer the
                          tenancy without the Landlord’s written consent.
                        </li>
                        <li>
                          The Tenant shall not engage in illegal or disruptive
                          activities on the Property.
                        </li>
                      </ul>
                    </li>

                    {/* Termination */}
                    <li>
                      <h3>Termination</h3>

                      <ul className='agreement-sub-terms'>
                        <li>
                          Either party may terminate the agreement by giving
                          [Notice Period] written notice.
                        </li>
                        <li>
                          If the Tenant fails to pay rent or breaches any term
                          of this Agreement, the Landlord may terminate the
                          tenancy with due notice.
                        </li>
                      </ul>
                    </li>

                    {/* Inspection */}
                    <li>
                      <h3>Inspection</h3>
                      <p>
                        The Landlord reserves the right to inspect the Property
                        with prior notice to the Tenant.
                      </p>
                    </li>

                    {/* Governing Law */}
                    <li>
                      <h3>Governing Law</h3>
                      <p>
                        This Agreement shall be governed by the laws of
                        [Jurisdiction].
                      </p>
                    </li>

                    {/* Signatures */}
                    <li>
                      <h3>Signatures</h3>
                      <p>
                        IN WITNESS WHEREOF, the parties hereto have signed this
                        Agreement on the date first above written.
                        <br />
                        Landlord: ______________
                        <br />
                        (Signature & Name: Mr Bell)
                        <br />
                        Tenant: ______________
                        <br />
                        (Signature & Name: Mr Tony)
                      </p>
                    </li>
                  </ol>

                  <div className='verify-btn-container preview-agreement-btn-div'>
                    <div className='go-back-div'>
                      <Button
                        text={`Sign`}
                        bgcolor={'#3357D0'}
                        color='#fff'
                        borderColor={'#fff'}
                        width='100%'
                        onClick={handleSubmit}
                      />
                    </div>
                    <div className='create-wallet-div'>
                      <Button
                        text={`Reject`}
                        bgcolor={'##c7ddff'}
                        color='#3357D0'
                        borderColor={'#fff'}
                        width='100%'
                        onClick={openModal}
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

export default SignAgreement
