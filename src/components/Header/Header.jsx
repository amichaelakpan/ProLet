import './Header.css' // Import the CSS file for styling
import Logo from './Logo'
import NavLinks from './NavLinks'
import ActionButtons from './ActionButtons'

const Header = () => {
  return (
    <div className='navbar'>
      <Logo />
      <NavLinks />
      <ActionButtons />
    </div>
  )
}

export default Header
