const Button = ({ text, bgcolor, color, borderColor }) => {
  return (
    <button
      className='button'
      style={{
        backgroundColor: bgcolor,
        color: color,
        border: `1px solid ${borderColor}`,
      }}
    >
      {/* <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded'></button> */}
      {text}
    </button>
  )
}

export default Button
