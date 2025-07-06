import { useRef } from 'react'
import './TenantRequestRepair.css'
import Logo from '../Header/Logo'
import arrow from '../../assets/images/arrow.png'
import dashboardimg from '../../assets/images/dashboardimg.png'
import bell from '../../assets/images/bell.png'
import upload from '../../assets/images/upload.png'

import Button from '../../utilities/Button'
import dashboard from '../../assets/images/dashboard.png'
import market from '../../assets/images/market.png'
import agreement from '../../assets/images/agreement.png'
import favorite from '../../assets/images/favorite.png'
import chat from '../../assets/images/chat.png'
import settings from '../../assets/images/settings.png'
import logout from '../../assets/images/logout.png'

import SidebarMenu from '../../utilities/SidebarMenu'

function TenantRequestRepair() {
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

      <div className='dashboard-main'>
        {/* Title Section  */}
        <section className='dashboard-main-titlebar'>
          <h3>Dashboard</h3>
          <img src={dashboardimg} alt='Dashboard image' />
          <p>Uwem Stack</p>
          <img src={bell} alt='Bell Icon' />
        </section>

        <section className='comp-get-started manage-tenants-header-text'>
          <h2>Request for repair on apartment </h2>
          <p>
            This section is for tenants to report any maintenance or repair
            issues in their apartment. It includes details such as the problem
            description, location, urgency level, time you will be available and
            phone number.
          </p>
        </section>

        {/* Content Section  */}
        <section className='dashboard-main-content'>
          <div className='dashboard-main-content-message'>
            <div className='dashboard-main-content-text'>
              <h5>Select Urgency Level</h5>
              <ul>
                <li>
                  <input type='radio' name='user-type' />
                  Very important
                </li>
                <li>
                  <input type='radio' name='user-type' />
                  Less important
                </li>
              </ul>
            </div>
          </div>

          <div className='reg-data-div'>
            <h5>
              Type your request to landlord (Please read and follow the above
              requirements)
            </h5>
            <textarea
              className='textarea'
              placeholder='Enter your message here'
            ></textarea>
          </div>

          <div className='reg-data-div'>
            <h5>Upload pictures of what you request </h5>
            <p>
              Upload all files in one of these formats: jpg, png, jpeg and they
              should be clear and readable
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

            <div className='reg-submit-div'>
              <Button
                text={`Send Message`}
                bgcolor={'#3357D0'}
                color='#fff'
                borderColor={'#fff'}
                width='18rem'
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TenantRequestRepair
