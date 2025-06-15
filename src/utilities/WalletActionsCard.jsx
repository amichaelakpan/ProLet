import './WalletActionsCard.css'

function WalletActionsCard({ img, text }) {
  return (
    <div className='wallet-actions-card-container'>
      <div className='wallet-actions-card-container-content'>
        <img src={img} alt={`${text} image`} />
        <p>{text}</p>
      </div>
    </div>
  )
}

export default WalletActionsCard
