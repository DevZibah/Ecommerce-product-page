import React, { useState } from 'react'

const Empty = ({ onClose }) => {
  const [show, setShow] = useState(false)
  return (
    <div className='modalcart1' onClick={onClose}>
      <div className='modalcart-content connttent'>
        <div className='modalcart-header'>
          <div className='modalcart-title'>
            <p>Cart</p>
          </div>
        </div>
        <div className='modalcart-body1'>
          <h5>Your cart is empty.</h5>
        </div>
      </div>
    </div>
  )
}

export default Empty
