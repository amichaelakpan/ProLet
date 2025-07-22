import React, { useState, useRef, useEffect } from 'react'
// import './TenantRecords.css'

// function TenantRecords() {
//   return <div>Tenant info</div>
// }

// export default TenantRecords

import './AdminUserRecord.css'
import Button from './Button'
import edit from '../assets/images/edit.png'

// Acion Menu Component
const ActionMenu = ({ openModal, myApartment = false, recordType = '' }) => {
  return (
    <div className='popup-menu'>
      {!myApartment && recordType !== 'agent' ? (
        <ul>
          <li>Terminate Rent</li>
          <li onClick={openModal}>Pay Renter </li>
        </ul>
      ) : recordType === 'agent' ? (
        <ul>
          <li>Message Agent</li>
        </ul>
      ) : (
        <ul>
          <li>Terminate Lease</li>
          <li onClick={openModal}>Pay Owner </li>
          <li>Message Agent </li>
          <li>Rate Agent </li>
          <li>Request for repair </li>
          <li>Report Agent </li>
        </ul>
      )}
    </div>
  )
}

// Pay Renter Modal Dialog Form Component
const PayRenterForm = ({ handleSubmit, closeModal }) => {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <div className='terminate-rent-header pay-renter-header'>
          <div className='transaction-history-title pay-renter-title'>
            Pay Renter
          </div>
          <div className='cancel-agreement-btn'>
            <Button
              text={'Cancel'}
              bgcolor={'#e5ebff'}
              color={'#3357d0'}
              onClick={closeModal}
            />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Agent ID*/};
          <div className='reg-data-div pay-renter-item'>
            <h5>Renter ID</h5>
            <input
              type='number'
              className='textbox'
              placeholder='Enter Renter ID'
            />
          </div>
          {/* Amount*/}
          <div className='reg-data-div pay-renter-item'>
            <h5>Amount</h5>
            <input
              type='number'
              className='textbox'
              placeholder='Enter Amount'
            />
          </div>
          {/* Purpose  */}
          <div className='reg-data-div pay-renter-item'>
            <h5>Purpose</h5>
            <select name='gender' id=''>
              <option value='1'>--Purpose--</option>
              <option value='1'>Compensation</option>
              <option value='2'>Refund</option>
              <option value='2'>Court Order</option>
              <option value='2'>Unauthenticated</option>
            </select>
          </div>
          <div className='go-to-wallet pay-renter-action-btns'>
            <Button
              text={`Pay`}
              bgcolor={'#3357D0'}
              color='#fff'
              borderColor={'#fff'}
              width='100%'
            />
          </div>
          {/* <div className='modal-actions  pay-renter-action-btns'>
            <button type='submit'>Submit</button>
            <button type='button' onClick={closeModal}>
              Cancel
            </button>
          </div> */}
        </form>
      </div>
    </div>
  )
}

const PayLandlordForm = ({ handleSubmit, closeModal }) => {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <div className='terminate-rent-header pay-renter-header'>
          <div className='transaction-history-title pay-renter-title'>
            Pay Landlord
          </div>
          <div className='cancel-agreement-btn'>
            <Button
              text={'Cancel'}
              bgcolor={'#e5ebff'}
              color={'#3357d0'}
              onClick={closeModal}
            />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Agent ID*/};
          <div className='reg-data-div pay-renter-item'>
            <h5>Agent ID</h5>
            <input
              type='number'
              className='textbox'
              placeholder='Enter Renter ID'
            />
          </div>
          {/* Amount*/}
          <div className='reg-data-div pay-renter-item'>
            <h5>Amount</h5>
            <input
              type='number'
              className='textbox'
              placeholder='Enter Amount'
            />
          </div>
          {/* Purpose  */}
          <div className='reg-data-div pay-renter-item'>
            <h5>Purpose</h5>
            <select name='gender' id=''>
              <option value='1'>--Purpose--</option>
              <option value='1'>Compensation</option>
              <option value='2'>Refund</option>
              <option value='2'>Court Order</option>
              <option value='2'>Unauthenticated</option>
            </select>
          </div>
          <div className='go-to-wallet pay-renter-action-btns'>
            <Button
              text={`Pay`}
              bgcolor={'#3357D0'}
              color='#fff'
              borderColor={'#fff'}
              width='100%'
            />
          </div>
          {/* <div className='modal-actions  pay-renter-action-btns'>
            <button type='submit'>Submit</button>
            <button type='button' onClick={closeModal}>
              Cancel
            </button>
          </div> */}
        </form>
      </div>
    </div>
  )
}

export function AdminUserRecord({
  name,
  email,
  phone,
  dob,
  state,
  city,
  date,
  status,
}) {
  // show action menu for tenant records
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef()
  const toggleMenu = () => {
    setShowMenu((prev) => !prev)
  }

  // Reference for the modal dialog

  // Modal state management
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  const modalRef = useRef()

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    alert('Payment Successful 👍')
    closeModal()
  }

  return (
    <div className='tenant-records-container'>
      <div className='tenant-record-items tenant-record-items-row'>
        <div className='tenant-record-item'>
          <div className='tenant-records-item-header'>{name}</div>
          <div className='tenant-records-item-content' ref={menuRef}>
            {/* Show Action Menu  */}

            {/* Open modal dialog to pay renter */}
            {isOpen &&
              PayRenterForm({
                handleSubmit,
                closeModal,
                modalRef,
              })}
            {/* Open modal dialog to pay landlord */}
            {isOpen &&
              PayLandlordForm({
                handleSubmit,
                closeModal,
                modalRef,
              })}
          </div>
        </div>
        <div className='tenant-record-item'>
          <div className='tenant-records-item-header'>{email}</div>
          <div className='tenant-records-item-content'>{phone}</div>
          <div className='tenant-records-item-content'>DOB: {dob}</div>
          <div className='tenant-records-item-content'>
            <button onClick={toggleMenu}>
              <img src={edit} alt='Edit Action' />
            </button>
          </div>
        </div>

        <div className='tenant-record-item'>
          <div className='tenant-records-item-header'>{state}</div>
          <div className='tenant-records-item-content'>{city}</div>
        </div>

        <div className='tenant-record-item'>
          <div className='tenant-records-item-header'>{date}</div>
        </div>

        <div>
          <Button text={status} bgcolor={'#3357d0'} color={'#fff'} />
        </div>
      </div>
    </div>
  )
}

export function AdminUserRecordHeader({
  name = 'Name',
  userDetails = 'User Details',
  address = 'address',
  date = 'Date',
  status = 'Status',
}) {
  return (
    <div className='tenant-record-items tenant-record-items-header'>
      <div>{name}</div>
      <div>{userDetails}</div>
      <div>{address}</div>
      <div>{date} </div>
      <div>{status}</div>
    </div>
  )
}
