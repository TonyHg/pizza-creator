import react from 'react'

import '../css/Header.scss'

export default function Header() {
  const headerStyle = "w-100 d-flex";
  const brandNameStyle = "text-white m-auto font-weight-bold";

  // TODO: add logo + github
  return <div id="header" className={headerStyle}> 
    <span className={brandNameStyle}>Pizza Creator</span>
  </div>
}