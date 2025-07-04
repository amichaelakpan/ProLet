import './AgentPropertyListing.css'
import Button from '../../utilities/Button'
import AgentProperty from '../../utilities/AgentProperty'
import property13 from '../../assets/images/property-13.png'
import property14 from '../../assets/images/property-14.png'
import property15 from '../../assets/images/property-15.png'
import property16 from '../../assets/images/property-16.png'
import property17 from '../../assets/images/property-17.png'
import property18 from '../../assets/images/property-18.png'

import property5 from '../../assets/images/property-5.jpg'
import property6 from '../../assets/images/property-6.jpg'
import property7 from '../../assets/images/property-7.jpg'
import property8 from '../../assets/images/property-8.jpg'
import property9 from '../../assets/images/property-9.jpg'
import property10 from '../../assets/images/property-10.jpg'

import heart from '../../assets/images/heart.png'

import '../RenterReg/RenterReg.css'
import Logo from '../Header/Logo'
import SidebarMenu from '../../utilities/SidebarMenu'

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

function AgentPropertyListing() {
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
          <div className='search-container'>
            {/* Layer 1 */}
            {/* Layer 2  */}
            <div className='search-content-2'>
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

              <div className='search-button'>
                <Button
                  text={`Search`}
                  bgcolor={`#3357d0`}
                  color={`#fff`}
                  borderColor={`#fff`}
                  width={`15rem`}
                />
              </div>
            </div>
            <div className='search-content-1 agent-listing-browse-properties'>
              <div className='agent-listing-header-text'>
                <h2>Based on your location</h2>
                <p>Some of our picked properties near your location</p>
              </div>
              <div>
                <Button
                  text={`Browse more properties`}
                  bgcolor={`#f3f4f4`}
                  color={`#375ad1`}
                  borderColor={`#375ad1`}
                />
              </div>
            </div>
            {/* Layer 3 */}
            <div className='search-content-3'>
              <div>
                <AgentProperty
                  name={'Mark Lawrence'}
                  location={'Abuja Munincipal'}
                  rating={3.5}
                  num_properties={12}
                  img={property13}
                  icon={heart}
                />
              </div>
              <div>
                <AgentProperty
                  name={'Sule Lamido'}
                  location={'Ikeja'}
                  rating={4.5}
                  num_properties={22}
                  img={property14}
                  icon={heart}
                />
              </div>
              <div>
                <AgentProperty
                  name={'Seun Makinde'}
                  location={'Kogi Central'}
                  rating={5}
                  num_properties={42}
                  img={property15}
                  icon={heart}
                />
              </div>
              <div>
                <AgentProperty
                  name={'Chinedu Iwuoha'}
                  location={'Benue Suburb'}
                  rating={4.0}
                  num_properties={28}
                  img={property16}
                  icon={heart}
                />
              </div>
              <div>
                <AgentProperty
                  name={'Ade Lanre'}
                  location={'Ogun Central'}
                  rating={4.5}
                  num_properties={42}
                  img={property17}
                  icon={heart}
                />
              </div>
              <div>
                <AgentProperty
                  name={'Kunle Shittu'}
                  location={'Abia Govt Quarters'}
                  rating={3}
                  num_properties={12}
                  img={property18}
                  icon={heart}
                />
              </div>
              <div>
                <AgentProperty
                  name={'Mark Lawrence'}
                  location={'Abuja Munincipal'}
                  rating={3.5}
                  num_properties={12}
                  img={property5}
                  icon={heart}
                />
              </div>
              <div>
                <AgentProperty
                  name={'Luke Bills'}
                  location={'Atlanta'}
                  rating={4.4}
                  num_properties={27}
                  img={property6}
                  icon={heart}
                />
              </div>
              <div>
                <AgentProperty
                  name={'Sule Lamido'}
                  location={'Ikeja'}
                  rating={4.5}
                  num_properties={22}
                  img={property7}
                  icon={heart}
                />
              </div>

              <div>
                <AgentProperty
                  name={'Ade Lanre'}
                  location={'Ogun Central'}
                  rating={4.5}
                  num_properties={42}
                  img={property8}
                  icon={heart}
                />
              </div>
              <div>
                <AgentProperty
                  name={'Sule Lamido'}
                  location={'Ikeja'}
                  rating={4.5}
                  num_properties={22}
                  img={property9}
                  icon={heart}
                />
              </div>
              <div>
                <AgentProperty
                  name={'Sule Lamido'}
                  location={'Ikeja'}
                  rating={4.5}
                  num_properties={22}
                  img={property10}
                  icon={heart}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AgentPropertyListing
