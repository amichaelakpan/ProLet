import './CreditWalletWithCard.css'
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

import chat from '../../assets/images/chat.png'
import settings from '../../assets/images/settings.png'
import logout from '../../assets/images/logout.png'
import infoalert from '../../assets/images/info-alert.png'

import '../CompDashRenter/CompDashRenter.css'

function CreditWalletWithCard() {
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

        {/* Fund Wallet Header  */}
        <div className='fund-wallet-header'>
          <div className='transaction-history-title'>Add money to wallet</div>
          <div className='back-to-wallet-div'>
            <Button text={'Cancel'} bgcolor={'#e5ebff'} color={'#3357d0'} />
          </div>
        </div>

        {/* Content Section  */}
        <section className='comp-main-content'>
          <div className='wallet-container credit-wallet-container'>
            <div className='reg-data-div '>
              <section className='header-info-icon'>
                <h5>Name on card</h5>
                <figure>
                  <img src={infoalert} alt='Info Icon' />{' '}
                </figure>
              </section>

              <input type='text' className='textbox' placeholder='Uwem Stack' />
            </div>
            <div className='reg-data-div'>
              <section className='header-info-icon'>
                <h5>Card Number</h5>
                <figure>
                  <img src={infoalert} alt='Info Icon' />{' '}
                </figure>
              </section>

              <input type='number' className='textbox' placeholder='1 2 3 4' />
            </div>

            <div className='cvv-exp-date'>
              <div className='reg-data-div'>
                <section className='header-info-icon'>
                  <h5>CCV</h5>
                  <figure>
                    <img src={infoalert} alt='Info Icon' />
                  </figure>
                </section>

                <input type='number' className='textbox' placeholder='999' />
              </div>

              <div className='reg-data-div'>
                <section className='header-info-icon'>
                  <h5>Exp. Date</h5>
                  <figure>
                    <img src={infoalert} alt='Info Icon' />
                  </figure>
                </section>

                <input
                  type='number'
                  className='textbox'
                  placeholder='MM / YYYY'
                />
              </div>
            </div>

            <div className='reg-data-div pay-btn'>
              <Button
                text={'Pay'}
                bgcolor={'#3357d0'}
                color={'#fff'}
                width='100%'
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CreditWalletWithCard
