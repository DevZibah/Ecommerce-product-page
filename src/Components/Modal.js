import React from 'react'
import close from '../assets/icon-close.svg'

const Modal = (props) => {
  if (!props.show) {
    return null
  }
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-body'>
          <div className='image'>
            <img onClick={props.onClose} src={close} alt='close' />
          </div>
          <div className='grid1'>
            <div>collection</div>
            <div>men</div>
            <div>women</div>
            <div>about</div>
            <div>contact</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
