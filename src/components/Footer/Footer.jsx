import './Footer.css'
import FooterHeader from './FooterHeader'
import FooterLinks from './FooterLinks'
import FooterSocialMedia from './FooterSocialMedia'

const Footer = () => {
  return (
    <footer className='footer'>
      <FooterHeader />
      <FooterLinks />
      <FooterSocialMedia />
    </footer>
  )
}
export default Footer
