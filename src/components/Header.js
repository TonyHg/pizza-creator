import react from 'react'

import '../css/Header.scss';
import Logo from '../assets/svg/pizza.svg';
import Github from '../assets/svg/github.svg';

export default function Header() {
  const headerStyle = "w-100 d-flex";
  const brandNameStyle = "text-white m-auto font-weight-bold";
  const logoStyle = "logo ml-3";
  const githubStyle = "github mr-3 d-flex";
  const github = "https://github.com/TonyHg"

  // TODO: add logo + github
  return <div id="header" className={headerStyle}> 
    <img className={logoStyle} src={Logo}/>
    <span className={brandNameStyle}>Pizza Creator</span>
    <a href={github} target="_blank" className={githubStyle}><img src={Github}/></a>
  </div>
}