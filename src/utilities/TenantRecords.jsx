// import './TenantRecords.css'

// function TenantRecords() {
//   return <div>Tenant info</div>
// }

// export default TenantRecords

import './TenantRecords.css'
import Button from './Button'

export function TenantRecords({
  name,
  ID,
  email,
  phone,
  state,
  city,
  amount,
  type,
  sdate,
  edate,
  duration,
  pytstatus,
}) {
  return (
    <div className='tenant-records-container'>
      <div className='tenant-record-items tenant-record-items-row'>
        <div className='tenant-record-item'>
          <div className='tenant-records-item-header'>{name}</div>
          <div className='tenant-records-item-content'>ID: {ID}</div>
        </div>
        <div className='tenant-record-item'>
          <div className='tenant-records-item-header'>{email}</div>
          <div className='tenant-records-item-content'>{phone}</div>
        </div>
        <div className='tenant-record-item'>
          <div className='tenant-records-item-header'>{state}</div>
          <div className='tenant-records-item-content'>{city}</div>
        </div>
        <div className='tenant-record-item'>
          <div className='tenant-records-item-header'>{amount}</div>
          <div className='tenant-records-item-content'>{type}</div>
        </div>
        <div
          className={`tenant-record-item ${
            pytstatus === 'Due' ? 'red-text' : ''
          }`}
        >
          <div className='tenant-records-item-header'>{sdate}</div>
          <div className='tenant-records-item-content'>{edate}</div>
        </div>
        <div className='tenant-record-item'>
          <div className='tenant-records-item-header'>{duration}</div>
          <div
            className={`tenant-records-item-content ${
              pytstatus === 'Paid' ||
              pytstatus === 'check' ||
              pytstatus === 'chat' ||
              pytstatus === 'issueagreement'
                ? ''
                : 'red-text'
            }`}
          >
            {pytstatus === 'Paid' ||
            pytstatus === 'check' ||
            pytstatus === 'chat' ||
            pytstatus === 'issueagreement'
              ? 'Active'
              : 'Expired'}
          </div>
        </div>

        <div>
          <Button
            text={
              pytstatus === 'Paid'
                ? 'Paid'
                : pytstatus === 'check'
                ? 'Check'
                : pytstatus === 'chat'
                ? 'Chat'
                : pytstatus === 'issueagreement'
                ? 'Issue Agreement'
                : 'Due'
            }
            bgcolor={
              pytstatus === 'Paid'
                ? '#15a85a'
                : pytstatus === 'check'
                ? '#15a85a'
                : pytstatus === 'chat' || pytstatus === 'issueagreement'
                ? '#3357d0'
                : '#c9184a'
            }
            color={'#fff'}
          />
        </div>
      </div>
    </div>
  )
}

export function TenantRecordsHeader({
  name = 'Name/ID',
  email = 'Email/Phone Number',
  propAddress = 'Property Address',
  amount = 'Amount Paid/Type',
  sedate = 'Start - End Date',
  duration = 'Duration/Status',
  pytstatus = 'Payment Status',
}) {
  return (
    <div className='tenant-record-items tenant-record-items-header'>
      <div>{name}</div>
      <div>{email}</div>
      <div>{propAddress}</div>
      <div>{amount} </div>
      <div>{sedate} </div>
      <div>{duration}</div>
      <div>{pytstatus}</div>
    </div>
  )
}
