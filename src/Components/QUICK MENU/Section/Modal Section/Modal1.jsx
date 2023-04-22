import "./modal.css"
import { useState,useEffect } from 'react';
import {RxCross2} from 'react-icons/rx'

const Modal1 = ({ open, onClose }) => {
    if(!open) return null;
  return (
    <div className="modalContainer">
        <RxCross2 onClick={onClose} className="closeBtn"/>
        123
    </div>
  )
}

export default Modal1
