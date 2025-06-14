import React, { useRef } from 'react'

import './RenterReg.css'
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

function RenterReg() {
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
            <SidebarMenu img={market} text={'My Apartment'} />
          </div>
          <div>
            <SidebarMenu img={estate} text={'Sign Agreement'} />
          </div>
          <div>
            <SidebarMenu img={agreement} text={'Message Owner'} />
          </div>
          <div>
            <SidebarMenu img={information} text={'Favorite'} />
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
            <SidebarMenu img={estate} text={'Advance Settings'} />
          </div>
          <div>
            <SidebarMenu img={agreement} text={'Log Out'} />
          </div>
        </menu>
      </div>

      <div className='reg-main'>
        {/* Title Section  */}
        <section className='reg-main-titlebar'>
          <h3>Dashboard</h3>
          <img src={dashboardimg} alt='Dashboard image' />
          <p>Uwem Stack</p>
          <img src={bell} alt='Bell Icon' />
        </section>

        {/* Header Section  */}
        <section className='reg-main-header'>
          <h3>Well done! You're almost done.</h3>
          <div className='renterreg-main-header-message'>
            Kindly follow the below steps to complete your profile set up
          </div>
        </section>

        {/* Content Section  */}
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

            {/* Home Address  */}
            <div className='reg-data-div'>
              <h5>Current Home Address</h5>
              <textarea
                className='textarea'
                placeholder='Enter your current address'
              ></textarea>
            </div>

            {/* Employment Status  */}
            <div className='reg-data-div'>
              <h5>Employment Status</h5>
              <select name='gender' id=''>
                <option value='1'>Employed</option>
                <option value='2'>Unemployed</option>
                <option value='3'>Freelancer</option>
                <option value='4'>Freelancer</option>
              </select>
            </div>

            {/* Place of work  */}
            <div className='reg-data-div'>
              <h5>Place of work</h5>
              <input type='text' className='textbox' />
            </div>

            {/* Work address */}
            <div className='reg-data-div'>
              <h5>Work Address</h5>
              <textarea className='textarea'></textarea>
            </div>

            {/* Boss / Supervisor's name */}
            <div className='reg-data-div'>
              <h5>Boss / Supervisor's name</h5>
              <input type='text' className='textbox' />
            </div>

            {/* Boss / Supervisor's Phone */}
            <div className='reg-data-div'>
              <h5>Boss / Supervisor's Phone Number</h5>
              <input type='number' className='textbox' />
            </div>

            {/* Position at work */}
            <div className='reg-data-div'>
              <h5>Position at work</h5>
              <input type='text' className='textbox' />
            </div>

            {/* NIN Verification */}
            <div className='reg-data-div'>
              <h5>NIN Verification</h5>
              <input type='number' className='textbox' />
            </div>

            {/* Work Start Date */}
            <div className='reg-data-div'>
              <h5>Work Start Date</h5>
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
                <section>No File Chosen</section>
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
    </div>
  )
}

export default RenterReg
