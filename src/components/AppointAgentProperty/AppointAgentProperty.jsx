import { useState } from 'react'
import '../RenterReg/RenterReg.css'
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

import './AppointAgentProperty.css'
import Property from '../../utilities/Property'
import property1 from '../../assets/images/property-1.jpg'
import property2 from '../../assets/images/property-2.jpg'
import property3 from '../../assets/images/property-3.jpg'
import property4 from '../../assets/images/property-4.jpg'
import property5 from '../../assets/images/property-5.jpg'
import property6 from '../../assets/images/property-6.jpg'
import bin from '../../assets/images/bin.png'

import {
  ConfirmationPrompt,
  SuccessfulPrompt,
} from '../../utilities/ConfirmationPrompt'

function AppointAgentProperty() {
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
            <SidebarMenu img={market} text={'My Apartment'} />
          </div>
          <div>
            <SidebarMenu img={estate} text={'Sign Agreement'} />
          </div>
          <div>
            <SidebarMenu img={agreement} text={'Chat'} />
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

      <div className='comp-reg-main'>
        {/* Title Section  */}
        <section className='comp-main-titlebar'>
          <h3>Dashboard</h3>
          <img src={dashboardimg} alt='Dashboard image' />
          <p>Uwem Stack</p>
          <img src={bell} alt='Bell Icon' />
        </section>

        <section className='comp-get-started appoint-agent-property-headertext'>
          <h3>Appoint Agent</h3>
          <p>
            Appoint agent allows you to search for properties and appoint an
            agent to manage your property. You can search for properties based
            on type, number of rooms, and whether they are furnished or not.
          </p>
        </section>

        {/* Content Section  */}
        <section className='comp-main-content'>
          <div className='comp-dash-renter-container'>
            {/* Layer 2  */}
            <div className='comp-dash-renter-content-2'>
              <select name='' id=''>
                <option value='' disabled selected hidden>
                  Select property type...
                </option>
                <option value='1'>first</option>
                <option value='2'>second</option>
                <option value='3'>third</option>
                <option value='4'>fourth</option>
              </select>
              <select name='' id=''>
                <option value='' disabled selected hidden>
                  Select Rooms...
                </option>
                <option value='1'>first</option>
                <option value='2'>second</option>
                <option value='3'>third</option>
                <option value='4'>fourth</option>
              </select>
              <select name='' id=''>
                <option value='' disabled selected hidden>
                  Furnished Apartments...
                </option>
                <option value='1'>first</option>
                <option value='2'>second</option>
                <option value='3'>third</option>
                <option value='4'>fourth</option>
              </select>

              <div className='comp-dash-renter-button'>
                <Button
                  text={`Search`}
                  bgcolor={`#3357d0`}
                  color={`#fff`}
                  borderColor={`#fff`}
                  width={`15rem`}
                />
              </div>
            </div>

            {/* Layer 3 */}
            <div className='comp-dash-renter-content-3'>
              {/* Promt to appoint agent to manage property */}
              {showDialog && (
                <ConfirmationPrompt
                  message={
                    'This agent is about to be added to manage this property. Are you sure you want to add this agent?'
                  }
                  handleCloseModal={handleCloseDialog}
                  handleClick={handlePropertyClick}
                  handleSuccessClick={handleSuccessClick}
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
              <div>
                <Property
                  img={property1}
                  icon={bin}
                  handleClick={handlePropertyClick}
                />
              </div>
              <div>
                <Property
                  img={property2}
                  icon={bin}
                  handleClick={handlePropertyClick}
                />
              </div>
              <div>
                <Property
                  img={property3}
                  icon={bin}
                  handleClick={handlePropertyClick}
                />
              </div>
              <div>
                <Property
                  img={property4}
                  icon={bin}
                  handleClick={handlePropertyClick}
                />
              </div>
              <div>
                <Property
                  img={property5}
                  icon={bin}
                  handleClick={handlePropertyClick}
                />
              </div>
              <div>
                <Property
                  img={property6}
                  icon={bin}
                  handleClick={handlePropertyClick}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AppointAgentProperty
