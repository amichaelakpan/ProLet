import './AgentListing.css'
import Button from './Button'

function AgentListing() {
  return (
    <div className='agent-listing-container'>
      <h2>Agents Listing</h2>
      <p>
        showcases all available agents, providing essential details such as
        names, photos, contact information, and areas of expertise. It allows
        users to search, filter, and explore agents efficiently, making it
        easier to find the right professional for their needs
      </p>
      <div>
        <Button text={'Browse Agents'} bgcolor={'#fff'} color={'#3357d0'} />
      </div>
    </div>
  )
}

export default AgentListing
