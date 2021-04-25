import React from 'react';

import Check from '../assets/svg/check.svg';
import '../css/OrderSuccessModal.scss';

export default function OrderSuccessModal({ visible }) {
  const modalStyle = "order-modal flex-column text-center shadow-lg";
  return <div className={modalStyle + (visible ? " show" : "")}>
    <h2>Thank you for odering!</h2>
    <h4>Your order is being delivered.</h4>
    <img src={Check} />
  </div>
} 