import React, { useRef } from 'react'

import './LandlordReg.css'
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
import upload from '../../assets/images/upload.png'
import chat from '../../assets/images/chat.png'
import settings from '../../assets/images/settings.png'
import logout from '../../assets/images/logout.png'

import '../CompDashRenter/CompDashRenter.css'
import Property from '../../utilities/Property'

function LandlordReg() {
  // Code Block to handle File Upload
  const fileInputRef = useRef(null)

  const handleButtonClick = () => {
    // Programmatically click the hidden input
    fileInputRef.current.click()
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      console.log('File selected:', file)
      // Handle upload logic here
    }
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

        <section className='comp-get-started'>
          <h3>Well done! You're almost done.</h3>
          <p>Kindly follow the below steps to complete your profile setup.</p>
        </section>

        {/* Content Section  */}
        <section className='comp-main-content'>
          <div className='comp-dash-renter-container'>
            <section className='reg-main-content'>
              <h3>Personal Information</h3>
              <div className='renter-reg-main'>
                {/* Gender  */}
                <div className='reg-data-div'>
                  <h5>Gender</h5>
                  <select name='gender' id=''>
                    <option value='1'>Male</option>
                    <option value='2'>Female</option>
                  </select>
                </div>

                {/* Home or Office Address  */}
                <div className='reg-data-div'>
                  <h5>Home or Office Address</h5>
                  <textarea
                    className='textarea'
                    placeholder='Enter your work place or business address'
                  ></textarea>
                </div>

                {/* Next of Kin FUll Name */}
                <div className='reg-data-div'>
                  <h5>Next of Kin Full Name</h5>
                  <input
                    type='text'
                    className='textbox'
                    placeholder='Enter your next of kin full name'
                  />
                </div>

                {/* Next of Kin Phone Number*/}
                <div className='reg-data-div'>
                  <h5>Next of Kin Phone Number</h5>
                  <input
                    type='number'
                    className='textbox'
                    placeholder='Enter your next of kin phone number'
                  />
                </div>

                {/* Next of Kin Address  */}
                <div className='reg-data-div'>
                  <h5>Next of Kin Address</h5>
                  <textarea
                    className='textarea'
                    placeholder='Enter your next of KIN address'
                  ></textarea>
                </div>

                {/* NIN Verification */}
                <div className='reg-data-div'>
                  <h5>NIN Verification</h5>
                  <input
                    type='number'
                    className='textbox'
                    placeholder='Enter your NIN'
                  />
                </div>

                {/* Work Start Date */}
                <div className='reg-data-div'>
                  <h5>Date of Birth</h5>
                  <input type='date' className='date-picker' />
                </div>

                {/* NIN Verification */}
                <div className='reg-data-div'>
                  <h5>Upload a valid means of identification </h5>
                  <p>
                    Upload all files in one of these formats: jpg, png, jpeg and
                    they should be clear and readable
                  </p>
                  <div className='upload-div'>
                    <div>
                      <Button
                        text={`Upload`}
                        bgcolor={'#3357D0'}
                        color='#fff'
                        borderColor={'#fff'}
                        width=''
                        onClick={handleButtonClick}
                        img={upload}
                      />
                      <input
                        type='file'
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                      />
                    </div>
                    <section>No file chosen yet</section>
                  </div>
                </div>

                <div className='reg-submit-div'>
                  <Button
                    text={`Submit`}
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

export default LandlordReg
