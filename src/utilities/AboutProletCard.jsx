import './AboutProletCard.css'

function AboutProletCard({ img, heading, text }) {
  return (
    <div className='about-prolet-card'>
      <div className='about-card'>
        <img src={img} alt='Home' className='about-card-image' />
      </div>
      <h4>{heading}</h4>
      <p className='card-text'>{text}</p>
    </div>
  )
}

export default AboutProletCard
