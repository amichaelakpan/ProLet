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
  status,
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
        <div className='tenant-record-item'>
          <div className='tenant-records-item-header'>{sdate}</div>
          <div className='tenant-records-item-content'>{edate}</div>
        </div>
        <div className='tenant-record-item'>
          <div className='tenant-records-item-header'>{duration}</div>
          <div className='tenant-records-item-content'>{status}</div>
        </div>

        <div>
          <Button
            text={pytstatus === 'Paid' ? 'Paid' : 'Due'}
            bgcolor={pytstatus === 'Paid' ? '#15a85a' : '#c9184a'}
          />
        </div>
      </div>
    </div>
  )
}

export function TenantRecordsHeader() {
  return (
    <div className='tenant-record-items tenant-record-items-header'>
      <div>Name/ID</div>
      <div>Email/Phone Number</div>
      <div>Property Address</div>
      <div>Amount Paid/Type</div>
      <div>Start - End Date</div>
      <div>Duration/Status</div>
      <div>Payment Status</div>
    </div>
  )
}
