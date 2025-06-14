import React, { useRef } from 'react'

import './EditPost.css'
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
import add from '../../assets/images/add.png'

import '../CompDashRenter/CompDashRenter.css'
import Property from '../../utilities/Property'

function EditPost() {
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
          <h3>Edit Property Posted</h3>
          <p>
            Modify the details of your listed property, including price, photos
            and description, to keep your rental listing up-to-date.
          </p>
        </section>

        {/* Content Section  */}
        <section className='comp-main-content'>
          <div className='comp-dash-renter-container'>
            <section className='reg-main-content'>
              <div className='renter-reg-main'>
                <div className='edit-property-details'>
                  {/* State  */}
                  <div className='edit-property-details-item'>
                    <h4>State</h4>
                    <select name='state' id=''>
                      <option value='' disabled selected hidden>
                        ...Select State...
                      </option>
                      <option value='1'>Abia</option>
                      <option value='2'>Adamawa</option>
                      <option value='3'>Bauchi</option>
                      <option value='4'>Benue</option>
                    </select>
                  </div>

                  {/* Local Govt  */}
                  <div className='edit-property-details-item'>
                    <h4>Local Govt.</h4>
                    <select name='state' id=''>
                      <option value='' disabled selected hidden>
                        ...Select Local Govt...
                      </option>
                      <option value='1'>Agege</option>
                      <option value='2'>Mushin</option>
                      <option value='3'>Shomolu</option>
                      <option value='4'>Yaba</option>
                      <option value='4'>Surulere</option>
                      <option value='4'>Alimosho</option>
                    </select>
                  </div>

                  {/* City  */}
                  <div className='edit-property-details-item'>
                    <h4>City</h4>
                    <select name='state' id=''>
                      <option value='' disabled selected hidden>
                        ...Select City...
                      </option>
                      <option value='1'>Lagos Island</option>
                      <option value='2'>Asokoro</option>
                      <option value='3'>Airport Villa</option>
                      <option value='4'>Abuja Munincipal</option>
                    </select>
                  </div>

                  {/* Local Govt  */}
                  <div className='edit-property-details-item'>
                    <h4>Type of Apartment</h4>
                    <select name='state' id=''>
                      <option value='' disabled selected hidden>
                        ...Select Type of Apartment...
                      </option>
                      <option value='1'>Studio Apartment</option>
                      <option value='2'>1-bedroom</option>
                      <option value='2'>2-bedrooms</option>
                      <option value='2'>3-bedrooms</option>
                      <option value='2'>Duplex</option>
                    </select>
                  </div>

                  {/* Local Govt  */}
                  <div className='edit-property-details-item'>
                    <h4>Number Of Bedrooms</h4>
                    <select name='state' id=''>
                      <option value='' disabled selected hidden>
                        ...Select Number of bed rooms...
                      </option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                    </select>
                  </div>

                  <div className='edit-property-details-item'>
                    <h4>How many in compound</h4>
                    <select name='state' id=''>
                      <option value='' disabled selected hidden>
                        ...Number in compound...
                      </option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>4</option>
                      <option value='4'>10</option>
                    </select>
                  </div>

                  {/* Amount Monthly  */}
                  <div className='edit-property-details-item edit-property-details-amount'>
                    <h4>Amount Montly</h4>
                    <input
                      type='number'
                      className='textbox'
                      placeholder='N2,000,000'
                    />
                  </div>

                  <div className='edit-property-details-item'>
                    <h4>Features</h4>
                    <select name='state' id=''>
                      <option value='' disabled selected hidden>
                        ...Select Features...
                      </option>
                      <option value='1'>Parking Facilities</option>
                      <option value='2'>Balconies</option>
                      <option value='3'>Security Infrastructure</option>
                      <option value='4'>24/7 Water Supply</option>
                      <option value='4'>Waste managementy</option>
                      <option value='4'>Fire Safety systems</option>
                      <option value='4'>Elevators</option>
                    </select>
                  </div>
                </div>

                {/* Type of Lease  */}
                <div className='reg-data-div'>
                  <h5>
                    Type of Lease (Select how you want to collect your rent)
                  </h5>
                  <ul>
                    <li>
                      <input type='radio' name='user-type' />
                      Daily
                    </li>
                    <li>
                      <input type='radio' name='user-type' />
                      Monthly
                    </li>
                    <li>
                      <input type='radio' name='user-type' />
                      Yearly
                    </li>
                  </ul>
                </div>

                {/* Who to manage property */}
                <div className='reg-data-div'>
                  <h5>Select who to manage this property</h5>
                  <ul>
                    <li>
                      <input type='radio' name='prop-manager' />
                      Add agent to manage this property
                    </li>
                    <li>
                      <input type='radio' name='prop-manager' />I want to manage
                      it myself
                    </li>
                  </ul>
                </div>

                {/* Special preferences - Tenant*/}
                <div className='reg-data-div'>
                  <h5>
                    Special Preferences (Select the type of tenant you want in
                    your apartment)
                  </h5>
                  <ul>
                    <li>
                      <input type='checkbox' name='tenant-type' />
                      Must be employed
                    </li>
                    <li>
                      <input type='checkbox' name='tenant-type' />
                      Must be married
                    </li>
                    <li>
                      <input type='checkbox' name='tenant-type' />
                      Must be a Christian
                    </li>
                    <li>
                      <input type='checkbox' name='tenant-type' />
                      Must be a Muslim
                    </li>
                  </ul>
                </div>

                {/* Special preferences - Tenant Type*/}
                <div className='reg-data-div'>
                  <h5>
                    Special Preferences (The type of tenant you want in your
                    apartment)
                  </h5>
                  <ul>
                    <li>
                      <input type='checkbox' name='tenant-type-2' />
                      Add Agent to manage this property
                    </li>
                    <li>
                      <input type='checkbox' name='tenant-type-2' />I will
                      manage it myself
                    </li>
                  </ul>
                </div>

                {/* NIN Verification */}
                <div className='reg-data-div'>
                  <h5>Upload pictures of the apartment </h5>
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

                {/* Apartment Feature  */}
                <div className='reg-data-div'>
                  <h5>Click this button to add more images</h5>
                  <Button
                    text={`Add more images`}
                    bgcolor={'#fff'}
                    color='#000'
                    borderColor={'#a6b5c7'}
                    width='14rem'
                    onClick={handleButtonClick}
                    img={add}
                  />
                </div>

                {/* Apartment Feature  */}
                <div className='reg-data-div'>
                  <h5>Apartment Feature</h5>
                  <textarea
                    className='textarea'
                    placeholder='Give more details about the apartment'
                  ></textarea>
                </div>

                <div className='reg-submit-div'>
                  <Button
                    text={`Upload`}
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

export default EditPost
