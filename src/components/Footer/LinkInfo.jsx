import proletlogo from '../../assets/images/proletlogo.png'

const Prolet = () => {
  return (
    <div className='footer-card'>
      <div className='logo'>
        <img src={proletlogo} alt='Logo' /> &nbsp;<span>ProLet</span>
      </div>
    </div>
  )
}

const Lease = () => {
  return (
    <>
      <div className='footer-card'>
        <h5 className='lease-header'>LEASE</h5>
        <ul className='lease-list'>
          <li>
            <a href='#'>Register as a landlord</a>
          </li>
          <li>
            <a href='#'>Post Property</a>
          </li>
          <li>
            <a href='#'>Reviews</a>
          </li>
          <li>
            <a href='#'>Stories</a>
          </li>
        </ul>
      </div>
    </>
  )
}

const Rent = () => {
  return (
    <>
      <div className='footer-card'>
        <h5 className='lease-header'>RENT</h5>
        <ul className='lease-list'>
          <li>
            <a href='#'>Rent Home</a>
          </li>
          <li>
            <a href='#'>Explore Properties</a>
          </li>

          <li>
            <a href='#'>Stories</a>
          </li>
        </ul>
      </div>
    </>
  )
}

const About = () => {
  return (
    <>
      <div className='footer-card'>
        <h5 className='lease-header'>ABOUT</h5>
        <ul className='lease-list'>
          <li>
            <a href='#'>Company</a>
          </li>
          <li>
            <a href='#'>How it works</a>
          </li>

          <li>
            <a href='#'>Contact</a>
          </li>

          <li>
            <a href='#'>Agents</a>
          </li>
        </ul>
      </div>
    </>
  )
}

const Terms = () => {
  return (
    <>
      <div className='footer-card terms'>
        <h5 className='lease-header'>TERMS & PRIVACY</h5>
        <ul className='lease-list'>
          <li>
            <a href='#'>Trust & Safety</a>
          </li>
          <li>
            <a href='#'>Terms of Service</a>
          </li>

          <li>
            <a href='#'>Privacy Policy</a>
          </li>
        </ul>
      </div>
    </>
  )
}

const Resources = () => {
  return (
    <>
      <div className='footer-card resources'>
        <h5 className='lease-header'>RESOURCES</h5>
        <ul className='lease-list'>
          <li>
            <a href='#'>Guides</a>
          </li>
          <li>
            <a href='#'>FAQ</a>
          </li>

          <li>
            <a href='#'>Help Center</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export { Prolet, Lease, Rent, Terms, About, Resources }
