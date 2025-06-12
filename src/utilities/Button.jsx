import './Button.css'

const Button = ({
  text,
  bgcolor,
  color,
  borderColor,
  width = '',
  onClick,
  img = '',
}) => {
  return (
    <button
      className='button btn-upload'
      onClick={onClick}
      style={{
        backgroundColor: bgcolor,
        color: color,
        border: `1px solid ${borderColor}`,
        width,
      }}
    >
      {/* <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded'></button> */}
      {text} {img === '' ? '' : <img src={img} alt={` ${text} Image`} />}
    </button>
  )
}

export default Button
