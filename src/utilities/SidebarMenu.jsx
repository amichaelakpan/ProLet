import './SidebarMenu.css'

function SidebarMenu({ img, text }) {
  return (
    <div className='menu-container'>
      <img src={img} alt={`${img} image`} />

      <span>{text}</span>
    </div>
  )
}

export default SidebarMenu
