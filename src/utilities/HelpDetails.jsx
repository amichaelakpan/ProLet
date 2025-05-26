import './HelpDetails.css'

function HelpDetails({
  cardBgColor,
  img,
  imgBgColor,
  header,
  headerColor,
  text,
  textColor,
}) {
  return (
    <div className='help-card' style={{ backgroundColor: cardBgColor }}>
      <div className='help-card-image-container'>
        <img
          className='help-card-image'
          backgroundColor={imgBgColor}
          src={img}
          alt='Card details'
        />
      </div>
      <div className='help-card-content'>
        <h1 className='help-card-content-header' style={{ color: headerColor }}>
          {header}
        </h1>
        <p className='help-card-content-desc' style={{ color: textColor }}>
          {text}
        </p>
      </div>
    </div>
  )
}

export default HelpDetails
