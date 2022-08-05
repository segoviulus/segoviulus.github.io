import React from 'react'
import CV from '../../assets/cv-alarse.pdf'

const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Descargar CV</a>
        <a href="#contacto" className='btn btn-primary'>Hablemos</a>
    </div>
  )
}

export default Cta