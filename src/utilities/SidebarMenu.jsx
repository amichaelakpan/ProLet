import './SidebarMenu.css'
import dashboard from '../../src/assets/images/dashboard.png'

function SidebarMenu() {
  return (
    <div className='menu-container'>
      <img src={dashboard} alt='Dashboard image' />
      <span>Dashboard</span>
    </div>
  )
}

export default SidebarMenu
