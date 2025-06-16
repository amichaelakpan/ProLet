import './ActiveDashboard.css'
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
import createagent from '../../assets/images/create-agent.png'
import createtenant from '../../assets/images/create-tenant.png'
import homeicon from '../../assets/images/home-icon.png'

import chat from '../../assets/images/chat.png'
import settings from '../../assets/images/settings.png'
import logout from '../../assets/images/logout.png'

import '../CompDashRenter/CompDashRenter.css'
import EditPropertyCard from '../../utilities/EditPropertyCard'
import ActiveLandlordOptionsCard from '../../utilities/ActiveLandlordOptionsCard'

import property1 from '../../assets/images/property-1.jpg'
import property2 from '../../assets/images/property-2.jpg'
import property3 from '../../assets/images/property-3.jpg'
import property4 from '../../assets/images/property-4.jpg'
import property5 from '../../assets/images/property-5.jpg'
import property6 from '../../assets/images/property-6.jpg'
import property7 from '../../assets/images/property-7.jpg'
import property8 from '../../assets/images/property-8.jpg'
import property9 from '../../assets/images/property-9.jpg'
import property10 from '../../assets/images/property-10.jpg'
import property11 from '../../assets/images/property-11.jpg'
import property12 from '../../assets/images/property-12.jpg'

function ActiveDashboard() {
  const titles = [
    'Start posting your property',
    'Create Account for agent',
    'Create Account for Tenant',
  ]
  const contents = [
    'Easily list your property by providing details, images and pricing to attract potiential buyers or renters.',
    'Allow agents register & set up their accounts securely, enabling access to essential tools and resources.',
    'Register a tenant to browse your listings, save favorites and connect with property owners or agents.',
  ]
  const btntext = ['Add property', 'Create Accouint', 'Create Account']
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
          <h3>Let's get you started</h3>
          <p>
            Navigate through your account and start managing your properties.
          </p>
        </section>

        <section className='active-landlord-options-box'>
          <div>
            <ActiveLandlordOptionsCard
              img={homeicon}
              title={titles[0]}
              content={contents[0]}
              btntext={btntext[0]}
            />
          </div>

          <div>
            <ActiveLandlordOptionsCard
              img={createagent}
              title={titles[1]}
              content={contents[1]}
              btntext={btntext[1]}
            />
          </div>

          <div>
            <ActiveLandlordOptionsCard
              img={createtenant}
              title={titles[2]}
              content={contents[2]}
              btntext={btntext[2]}
            />
          </div>
        </section>

        {/* Content Section  */}
        <section className='comp-main-content'>
          <div className='comp-dash-renter-container'>
            <div className='dashboard-landlord-search-container'>
              <select name='' id=''>
                <option value='' disabled selected hidden>
                  Select Property Type...
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

              <div className='dash-landlord-search-btn'>
                <Button
                  text='Search'
                  bgcolor='#465dcb'
                  color='#fff'
                  borderColor='none'
                  width='12rem'
                />
              </div>
            </div>
          </div>

          <div className='active-dash-proplist'>
            <div>
              <EditPropertyCard img={property1} />
            </div>
            <div>
              <EditPropertyCard img={property2} />
            </div>
            <div>
              <EditPropertyCard img={property3} />
            </div>
            <div>
              <EditPropertyCard img={property4} />
            </div>
            <div>
              <EditPropertyCard img={property5} />
            </div>
            <div>
              <EditPropertyCard img={property6} />
            </div>
            <div>
              <EditPropertyCard img={property7} />
            </div>
            <div>
              <EditPropertyCard img={property8} />
            </div>
            <div>
              <EditPropertyCard img={property9} />
            </div>

            <div>
              <EditPropertyCard img={property10} />
            </div>
            <div>
              <EditPropertyCard img={property11} />
            </div>
            <div>
              <EditPropertyCard img={property12} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ActiveDashboard
