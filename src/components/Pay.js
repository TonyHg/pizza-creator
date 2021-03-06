import React from 'react';

import '../css/Pay.scss';

export default function Pay({onPay, total}) {
  const payStyle = "pay-btn position-absolute py-2 px-4";
  return <div className={payStyle + (total === 0 ? " disabled" : " enabled")} onClick={onPay}>
    Pay {total}$
  </div>
}