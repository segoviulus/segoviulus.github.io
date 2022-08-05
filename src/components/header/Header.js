import React, { useEffect, useState } from 'react'
import Cta from './Cta'
import Me from '../../assets/meavatar1.png'
import HeaderSocials from './HeaderSocials'
import AnimatedLetters from '../animatedletters/animated'
import Loader from 'react-loaders'

const Header = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const holaArray = [ 'h', 'o', 'l', 'a', ',']
  const soyArray = [ 's', 'o', 'y', ' ']
  const nameArray = ['a', 'l', 'a', 'r', 's', 'e']
  // const jobwArray = ['w', 'e', 'b', ' ']
  // const jobdArray = ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  useEffect (() => {
        setTimeout(() => {
      return (setLetterClass('text-animate-hover')
        )}, 4000)
  }, [])

  return (
    <>
    <header id='home'>
      <div className="container header__container">
        <div className='text-zone'>
        <h1>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={holaArray}
          index={11}
          />

          <br/>

          <AnimatedLetters
          letterClass={letterClass}
          strArray={soyArray}
          index={16}
          />

          <br/>

          <AnimatedLetters
          letterClass={letterClass}
          strArray={nameArray}
          index={20}
          />

          </h1>
          
          <h2>Frontend Developer</h2>
        </div>
        <img src={Me} alt="Me" className='me'/>
        <HeaderSocials/>
        <div className='scroll'>
          <a href="#contacto">Scroll Down</a>
        </div>
        <Cta/>
      </div>
    </header>
    <Loader type="pacman"/>
    </>
  )
}

export default Header