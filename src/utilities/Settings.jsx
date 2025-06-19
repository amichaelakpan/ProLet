import './Settings.css'

import rightanglebraccket from '../assets/images/right-angle-bracket.png'

function Settings({ img, title }) {
  return (
    <div className='settings-container'>
      <figure className='settings-container-image'>
        <img src={img} alt='Settings' />
      </figure>
      <h3 className='settings-container-title'>{title}</h3>
      <figure className='settings-container-arrow'>
        <img src={rightanglebraccket} alt='Right angle bracket' />
      </figure>
    </div>
  )
}

export default Settings
