import React from 'react'

const Maparuta = ({ano, institucion, carrera, subtitulo, subtitulo2, asignatura1, asignatura2, asignatura3, asignatura4 }) => {
  return (
    <div className='mapaRuta__container'>
      <div className='mapaRuta__ano'>
        <div />
        <h3>{ano}</h3>
      </div>
      <div className='mapaRuta__institucion'>
        <h1>{institucion}</h1>
        <p>{carrera}</p>
      </div>
      <div className='mapaRuta__texto'>
        <h2>{subtitulo}</h2>
        <div />
        <h3>{asignatura1}</h3>
        <h3>{asignatura2}</h3>
        <h3>{asignatura3}</h3>
        <h2 className='mapaRuta__textoSubtitulo2'>{subtitulo2}</h2>
        <div />
        <h3>{asignatura4}</h3>

      </div>
      
    </div>
    
  )
}

export default Maparuta