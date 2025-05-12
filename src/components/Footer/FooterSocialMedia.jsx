import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'
import linkedin from '../../assets/images/linkedin.png'

const FooterSocialMedia = () => {
  return (
    <div className='footer-social-media'>
      <div>&copy;2025 ProLet. All rights reserved</div>
      <div className='social-media'>
        <img src={facebook} alt='facebook logo' />
        <img src={instagram} alt='instagram logo' />
        <img src={twitter} alt='twitter logo' />
        <img src={linkedin} alt='linkedin logo' />
      </div>
    </div>
  )
}
export default FooterSocialMedia
