import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='socialIcons'>
        <a href="https://www.linkedin.com/in/ariel-segovia/"><FaLinkedinIn/></a>
        <a href="https://github.com/segoviulus"><FaGithub/></a>
        <a href="https://www.instagram.com/alarse.ph/"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials