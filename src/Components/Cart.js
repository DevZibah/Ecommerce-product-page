import React, { useState } from 'react'
import clear from '../assets/icon-delete.svg'
import Empty from './Empty'
const Cart = ({ show1, carrt, onClose, quantity, price, removeCart }) => {
  if (!show1) {
    return null
  }
  const total = price * quantity

  if (carrt.length === 0) {
    return (
      <div>
        <Empty onClose={onClose} />
      </div>
    )
  }
  return (
    <div className='modalcart'>
      <div className='modalcart-content contentt'>
        <div className='modalcart-header headerr' onClick={onClose}>
          <div className='modalcart-title'>
            <p>Cart</p>
          </div>
        </div>
        <div className='modalcart-body'>
          {carrt.map((item, key) => (
            <div key={key} className='cartflex'>
              <div>
                <img className='cartimg' src={item.image} alt='image' />
              </div>
              <div className='carttext'>
                <p className='carrttext'>{item.name}</p>
                <p className='cartprice'>
                  ${item.price}.00 x {quantity} <span>${total}.00</span>
                </p>
              </div>
              <div className='cartimage'>
                <img onClick={removeCart} src={clear} alt='cart' />
              </div>
            </div>
          ))}
        </div>
        <div className='buttn'>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
