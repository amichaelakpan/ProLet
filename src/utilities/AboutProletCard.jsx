import './AboutProletCard.css'

function AboutProletCard({ img, heading, text }) {
  return (
    <div className='about-prolet-card'>
      <div className='about-card-image'>
        <img src={img} alt='Home' />
      </div>
      <h4>{heading}</h4>
      <p className='card-text'>{text}</p>
    </div>
  )
}

export default AboutProletCard
