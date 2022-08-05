import React from 'react'
import {BiHomeAlt} from 'react-icons/bi'
import {RiUserSmileLine} from 'react-icons/ri'
import {BsJournalBookmark} from 'react-icons/bs'
import {BiMessageDetail} from 'react-icons/bi'
import { useState } from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><BiHomeAlt/></a>
      <a href="#cv" onClick={() => setActiveNav('#cv')} className={activeNav === '#cv' ? 'active' : ''}><RiUserSmileLine/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsJournalBookmark/></a>
      <a href="#contacto" onClick={() => setActiveNav('#contacto')} className={activeNav === '#contacto' ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Navbar