import React from 'react'

import './AdminDashboard.css'
import '../RenterReg/RenterReg.css'
import Logo from '../Header/Logo'
import SidebarMenu from '../../utilities/SidebarMenu'
import Button from '../../utilities/Button'
import { AdminUserRecord } from '../../utilities/AdminUserRecord'
import { AdminUserRecordHeader } from '../../utilities/AdminUserRecord'

import arrow from '../../assets/images/arrow.png'
import dashboardimg from '../../assets/images/dashboardimg.png'
import bell from '../../assets/images/bell.png'
import dashboard from '../../assets/images/dashboard.png'
import market from '../../assets/images/market.png'
import agreement from '../../assets/images/agreement.png'

import chat from '../../assets/images/chat.png'
import settings from '../../assets/images/settings.png'
import logout from '../../assets/images/logout.png'
import pendingApproval from '../../assets/images/pending-approval.png'
import users from '../../assets/images/users.png'
import activeUsers from '../../assets/images/active-users.png'
import tower from '../../assets/images/tower.png'

import WalletActionsCard from '../../utilities/WalletActionsCard'
import AdminStatisticsCard from '../../utilities/AdminStatisticsCard'

import '../CompDashRenter/CompDashRenter.css'

function AdminDashboard() {
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

        {/* <section className='comp-get-started manage-tenants-header-text'>
          <h2>Manage Tenants</h2>
          <p>
            Manage Tenants allows you to oversee and organize tenant information
            efficiently. Add, edit and track tenant details, lease agreements
            and payment records in one place for seamless property management
          </p>
        </section> */}
        <div className='quick-actions'>
          <div className='quick-actions-content admin-dashboard-quick-actions'>
            <div>
              <AdminStatisticsCard
                img={pendingApproval}
                text={'Pending Approval'}
                count={8}
                bgColor={'#3357d0'}
              />
            </div>
            <div>
              <AdminStatisticsCard
                img={users}
                text={'Total Number of Users'}
                count={10000}
                bgColor={'#0475d2'}
              />
            </div>
            <div>
              <AdminStatisticsCard
                img={activeUsers}
                text={'Active Users'}
                count={1200}
                bgColor={'#bb4eff'}
              />
            </div>
            <div>
              <AdminStatisticsCard
                img={tower}
                text={'Uploaded Properties'}
                count={3000}
                bgColor={'#4cc9f0'}
              />
            </div>
          </div>
        </div>

        {/* Content Section  */}
        <section className='comp-main-content'>
          <div className='comp-dash-renter-container'>
            <section className='reg-main-content'>
              {/* Tenants info  */}

              <section className='comp-main-content'>
                {/* Wallet Header Section  */}

                {/* Transactions Section  */}
                <div className='transactions'>
                  <div className='transactions-records'>
                    <AdminUserRecordHeader />
                    {/* name, email, phone, dob, state, city, date, status, */}
                    <AdminUserRecord
                      name={'John Doe'}
                      email={'john.doe@gmail.com'}
                      phone={'+234 803 123 4567'}
                      dob={'1st January 1990'}
                      state={'Lagos'}
                      city={'Ikeja'}
                      date={'6th June 2025'}
                      status={'Pending...'}
                    />
                    <AdminUserRecord
                      name={'John Doe'}
                      email={'john.doe@gmail.com'}
                      phone={'+234 803 123 4567'}
                      dob={'1st January 1990'}
                      state={'Lagos'}
                      city={'Ikeja'}
                      date={'6th June 2025'}
                      status={'Pending...'}
                    />
                    <AdminUserRecord
                      name={'John Doe'}
                      email={'john.doe@gmail.com'}
                      phone={'+234 803 123 4567'}
                      dob={'1st January 1990'}
                      state={'Lagos'}
                      city={'Ikeja'}
                      date={'6th June 2025'}
                      status={'Pending...'}
                    />
                    <AdminUserRecord
                      name={'John Doe'}
                      email={'john.doe@gmail.com'}
                      phone={'+234 803 123 4567'}
                      dob={'1st January 1990'}
                      state={'Lagos'}
                      city={'Ikeja'}
                      date={'6th June 2025'}
                      status={'Pending...'}
                    />
                    <AdminUserRecord
                      name={'John Doe'}
                      email={'john.doe@gmail.com'}
                      phone={'+234 803 123 4567'}
                      dob={'1st January 1990'}
                      state={'Lagos'}
                      city={'Ikeja'}
                      date={'6th June 2025'}
                      status={'Pending...'}
                    />
                    <AdminUserRecord
                      name={'John Doe'}
                      email={'john.doe@gmail.com'}
                      phone={'+234 803 123 4567'}
                      dob={'1st January 1990'}
                      state={'Lagos'}
                      city={'Ikeja'}
                      date={'6th June 2025'}
                      status={'Pending...'}
                    />
                  </div>
                </div>
              </section>
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AdminDashboard
