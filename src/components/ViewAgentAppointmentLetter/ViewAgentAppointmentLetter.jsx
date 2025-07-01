import React from 'react'

import './ViewAgentAppointmentLetter.css'
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

import '../CompDashRenter/CompDashRenter.css'
import WalletActionsCard from '../../utilities/WalletActionsCard'

function ViewAgentAppointmentLetter() {
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
                {/* Wallet Header Section  */}
                <div className='wallet-header agreement-title-header'>
                  <div className='transaction-history-title'>
                    Generate Letter of Appointment
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
                </section>
              </section>
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ViewAgentAppointmentLetter
