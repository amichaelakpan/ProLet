import React, { useState, useRef, useEffect } from 'react'
// import './TenantRecords.css'

// function TenantRecords() {
//   return <div>Tenant info</div>
// }

// export default TenantRecords

import './ManageUsersRecords.css'
import Button from './Button'
import edit from '../assets/images/edit.png'

// Acion Menu Component
const ActionMenu = ({ openModal, myApartment = false }) => {
  return (
    <div className='popup-menu'>
      {!myApartment ? (
        <ul>
          <li onClick={openModal}>Dactivate Account</li>
          <li>View Activities </li>
          <li>View Profile</li>
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

const DeactivationForm = ({
  handleSubmit,
  closeModal,
  handleRejectAgreement,
}) => {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <div className='terminate-rent-header pay-renter-header'>
          <div className='transaction-history-title pay-renter-title'>
            Deactivation
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
          <div className='reg-data-div'>
            <h5>Reasons for deactivation</h5>
            <textarea
              className='textarea'
              placeholder='Enter your message here'
            ></textarea>
          </div>
          <div className='go-to-wallet pay-renter-action-btns'>
            <Button
              text={`Deactivate`}
              bgcolor={'#3357D0'}
              color='#fff'
              borderColor={'#fff'}
              width='100%'
              onClick={handleRejectAgreement}
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

export function ManageUsersRecords({
  ownerName,
  ownerID,
  renterName,
  renterEmail,
  renterPhone,
  renterID,
  numProperties,
  amount,
  registeredDate,
  duration,
  pytstatus,
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
    alert('Deactivation Successful 👍')
    closeModal()
  }

  return (
    <div className='tenant-records-container'>
      <div className='tenant-record-items tenant-record-items-row'>
        <div className='tenant-records-item-header'>
          <section>{ownerName}</section>
          <section>ID:{ownerID}</section>
        </div>
        <div className='tenant-record-item'>
          <div className='manage-user-records-div' ref={menuRef}>
            <div className='tenant-records-item-header'>{renterName}</div>
            <div className='tenant-records-item-content'>{renterEmail}</div>
            <div className='tenant-records-item-content'>{renterPhone}</div>

            <div className='tenant-records-item-content' ref={menuRef}>
              <span> ID: {renterID} </span>
              <button onClick={toggleMenu}>
                <img src={edit} alt='Edit Action' />
              </button>

              {/* Show Action Menu  */}
              {
                showMenu &&
                  ActionMenu({
                    openModal,
                  }) /* Render the action menu when showMenu is true */
              }
              {/* Open modal dialog to deactivate user */}
              {isOpen &&
                DeactivationForm({
                  handleSubmit,
                  closeModal,
                  modalRef,
                })}
              {/* Open modal dialog to pay landlord */}
              {/* {isOpen &&
                PayLandlordForm({
                  handleSubmit,
                  closeModal,
                  modalRef,
                })} */}
            </div>
          </div>
        </div>
        <div className='tenant-record-item'>
          <div className='tenant-records-item-header'>{numProperties}</div>
          {/* <div className='tenant-records-item-content'>{phone}</div> */}
          {/* <button onClick={toggleMenu}>
            <img src={edit} alt='Edit Action' />
          </button> */}
        </div>

        <div className='tenant-record-item'>
          <div className='tenant-records-item-header'>{amount}</div>
        </div>
        <div
          className={`tenant-record-item ${
            pytstatus === 'Due' ? 'red-text' : ''
          }`}
        >
          <div className='tenant-records-item-header'>{registeredDate}</div>
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

export function ManageUsersRecordsHeader({
  name = "Owner's name/ID",
  renter = "Renter's Details",
  numProperties = 'Number of properties rented',
  amount = 'Amount Spent',
  registeredDate = 'Registered Date',
  duration = 'Duration/Status',
  pytstatus = 'Payment Status',
}) {
  return (
    <div className='tenant-record-items tenant-record-items-header'>
      <div>{name}</div>
      <div>{renter}</div>
      <div>{numProperties}</div>
      <div>{amount} </div>
      <div>{registeredDate} </div>
      <div>{duration}</div>
      <div>{pytstatus}</div>
    </div>
  )
}
