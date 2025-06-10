import './Dashboard.css'
import Logo from '../Header/Logo'
import arrow from '../../assets/images/arrow.png'
import dashboardimg from '../../assets/images/dashboardimg.png'
import bell from '../../assets/images/bell.png'
import redalert from '../../assets/images/redalert.png'
import Button from '../../utilities/Button'

import SidebarMenu from '../../utilities/SidebarMenu'

function Dashboard() {
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
            <SidebarMenu />
          </div>
          <div>
            <SidebarMenu />
          </div>
          <div>
            <SidebarMenu />
          </div>
          <div>
            <SidebarMenu />
          </div>
          <div>
            <SidebarMenu />
          </div>
          <div>
            <SidebarMenu />
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

        {/* Header Section  */}
        <section className='dashboard-main-header'>
          <h3>Please complete your registration</h3>
          <div className='dashboard-main-header-message'>
            <img src={redalert} alt='Red Alert' />
            <div className='dashboard-main-header-text'>
              <h5>Your're almost there</h5>
              <p>Please complete your profile setup</p>
            </div>
            <div className='ashboard-main-header-btn'>
              <Button
                text='Complete Now'
                bgcolor='#e66c'
                color='#fff'
                borderColor='none'
                width=''
              />{' '}
            </div>
          </div>
        </section>
        <section className='dashboard-main-content'>Content</section>
      </div>
    </div>
  )
}

export default Dashboard
