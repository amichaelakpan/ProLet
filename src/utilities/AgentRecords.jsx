import React, { useState, useRef, useEffect } from 'react'

import './AgentRecords.css'
import Button from './Button'
import edit from '../assets/images/edit.png'

// Acion Menu Component
const AgentActionMenu = ({ openModal }) => {
  return (
    <div className='popup-menu'>
      <ul>
        <li>Appoint Agent</li>
        <li onClick={openModal}>Pay Agent</li>
        <li>Message Agent</li>
        <li>Fire Agent</li>
        <li>Rate Agent</li>
      </ul>
    </div>
  )
}

// Pay Renter Modal Dialog Form Component
const PayAgentForm = ({ handleSubmit, closeModal }) => {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <div className='terminate-rent-header pay-renter-header'>
          <div className='transaction-history-title pay-renter-title'>
            Pay Agent
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
              placeholder='Enter Agent ID'
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

export function AgentRecords({
  name,
  ID,
  email,
  phone,
  state,
  city,
  commission,
  comm_date,
  comm_balance,
  renter_name,
  renter_email,
  renter_phone,

  pytstatus,
}) {
  // show action menu for agent records
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
    <div className='agent-records-container'>
      <div className='agent-record-items agent-record-items-row'>
        <div className='agent-record-item'>
          <div className='agent-records-item-header'>{name}</div>
          <div className='agent-records-item-content' ref={menuRef}>
            <span> ID: {ID} </span>{' '}
            <button onClick={toggleMenu}>
              <img src={edit} alt='Edit Action' />
            </button>
            {/* Show Action Menu  */}
            {
              showMenu &&
                AgentActionMenu({
                  openModal,
                }) /* Render the action menu when showMenu is true */
            }
            {/* Open modal dialog to pay renter */}
            {isOpen &&
              PayAgentForm({
                handleSubmit,
                closeModal,
                modalRef,
              })}
          </div>
        </div>
        <div className='agent-record-item'>
          <div className='agent-records-item-header'>{email}</div>
          <div className='agent-records-item-content'>{phone}</div>
        </div>
        <div className='agent-record-item'>
          <div className='agent-records-item-header'>{state}</div>
          <div className='agent-records-item-content'>{city}</div>
        </div>
        <div className='agent-record-item'>
          <div className='agent-records-item-header'>{commission}</div>
          <div className='agent-records-item-content'>{comm_date}</div>
        </div>
        <div
          className={`agent-record-item ${
            pytstatus === 'Due' ? 'red-text' : ''
          }`}
        >
          <div className='agent-records-item-header'>{comm_balance}</div>
          <div className='agent-records-item-content'>{comm_date}</div>
        </div>
        <div className='agent-record-item'>
          <div className='agent-records-item-header'>{renter_name}</div>
          <div
            className={`agent-records-item-content ${
              pytstatus === 'Paid' ||
              pytstatus === 'check' ||
              pytstatus === 'chat' ||
              pytstatus === 'issueagreement' ||
              pytstatus === 'viewappointment'
                ? ''
                : 'red-text'
            }`}
          >
            {renter_email}
          </div>
          <div className='agent-records-item-header'>{renter_phone}</div>
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
                : pytstatus === 'viewappointment'
                ? 'View Appointment'
                : 'Due'
            }
            bgcolor={
              pytstatus === 'Paid'
                ? '#15a85a'
                : pytstatus === 'check'
                ? '#15a85a'
                : pytstatus === 'chat' ||
                  pytstatus === 'issueagreement' ||
                  pytstatus === 'viewappointment'
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

export function AgentRecordsHeader({
  name = 'Name/ID',
  email = 'Email/Phone Number',
  propAddress = 'Property Address',
  amount = 'Commission Paid/Date',
  commissionBalance = 'Outstanding Commission',
  renterDetails = "Renter's Details",
  appointment = 'Issue Appointment',
}) {
  return (
    <div className='agent-record-items agent-record-items-header'>
      <div>{name}</div>
      <div>{email}</div>
      <div>{propAddress}</div>
      <div>{amount} </div>
      <div>{commissionBalance} </div>
      <div>{renterDetails}</div>
      <div>{appointment}</div>
    </div>
  )
}
