import './AgentVerifyInfo.css'
import Logo from '../Header/Logo'
import SidebarMenu from '../../utilities/SidebarMenu'
import Button from '../../utilities/Button'

import arrow from '../../assets/images/arrow.png'
import dashboardimg from '../../assets/images/dashboardimg.png'
import bell from '../../assets/images/bell.png'
import dashboard from '../../assets/images/dashboard.png'
import market from '../../assets/images/market.png'
import agreement from '../../assets/images/agreement.png'

import chat from '../../assets/images/chat.png'
import settings from '../../assets/images/settings.png'
import logout from '../../assets/images/logout.png'

import '../CompDashRenter/CompDashRenter.css'

function AgentVerifyInfo() {
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
            <SidebarMenu img={market} text={'See Agreement'} />
          </div>
          <div>
            <SidebarMenu img={agreement} text={'Approvals'} />
          </div>
          <div>
            <SidebarMenu img={agreement} text={'Check Request'} />
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
          <div className='verify-info-container'>
            <h2>Verify your information as Agent</h2>
            <p className='bvn-prompt-text'>
              Confirm your name and phone number
            </p>
            {/* NIN Verification */}
            <div className='verify-details'>
              <p className='verify-name'>Uwem Stack</p>
              <p className='verify-number'>09022234356</p>
            </div>
            <div className='verify-btn-container'>
              <div className='go-back-div'>
                <Button
                  text={`Go Back`}
                  bgcolor={'#3357D0'}
                  color='#fff'
                  borderColor={'#fff'}
                  width='100%'
                />
              </div>
              <div className='create-wallet-div'>
                <Button
                  text={`Create Wallet`}
                  bgcolor={'#3357D0'}
                  color='#fff'
                  borderColor={'#fff'}
                  width='100%'
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AgentVerifyInfo
