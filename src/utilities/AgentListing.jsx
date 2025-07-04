import './AgentListing.css'
import Button from './Button'

function AgentListing({ headerText, bodyText, btnText, onClick = () => {} }) {
  return (
    <div className='agent-listing-container'>
      <h2>{headerText}</h2>
      <p>{bodyText}</p>
      <div>
        <Button
          text={`${btnText}`}
          bgcolor={'#fff'}
          color={'#3357d0'}
          onClick={onClick}
        />
      </div>
    </div>
  )
}

export default AgentListing
