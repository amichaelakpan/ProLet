import Button from './Button'

const ActionButtons = () => {
  return (
    <div className='action-buttons'>
      <Button
        text='Login'
        bgcolor='white'
        color='black'
        borderColor='#e0def7'
      />
      <Button
        text='Sign Up'
        bgcolor='#3357d0'
        color='white'
        borderColor='none'
      />
    </div>
  )
}
export default ActionButtons
