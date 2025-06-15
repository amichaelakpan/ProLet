import './Records.css'
import Button from './Button'

export function Records({ date, purpose, recipient, amount, type, status }) {
  return (
    <div className='records-container'>
      <div className='record-items record-items-row'>
        <div>{date}</div>
        <div>{purpose}</div>
        <div>{recipient}</div>
        <div>{amount}</div>
        <div>{type}</div>
        <div>
          <Button
            text={status === 'successful' ? 'Successful' : 'Failed'}
            bgcolor={status === 'successful' ? '#e8f4ee' : '#ffb3c1'}
            color={status === 'successful' ? '#15a85a' : '#c9184a'}
            borderColor={status === 'successful' ? '#15a85a' : '#c9184a'}
          />
        </div>
      </div>
    </div>
  )
}

export function RecordsHeader() {
  return (
    <div className='record-items record-items-header'>
      <div>Date</div>
      <div>Purpose</div>
      <div>Recipient</div>
      <div>Amount</div>
      <div>Type</div>
      <div>Status</div>
    </div>
  )
}
