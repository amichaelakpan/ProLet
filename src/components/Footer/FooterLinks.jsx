import { Prolet, Lease, Rent, Terms, About, Resources } from './LinkInfo'

const FooterLinks = () => {
  return (
    <div className='footer-links'>
      <Prolet />
      <Lease />
      <Rent />
      <About />

      <Terms />
      <Resources />
    </div>
  )
}
export default FooterLinks
