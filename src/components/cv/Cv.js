import React from 'react'
import Maparuta from './Maparuta'
import Avatar from '../../assets/meavatar3.png'

const cvData = [

  {
    ano: '2021 - 2022',
    institucion: 'CoderHouse',
    carrera: 'Full Stack Developer | En curso',
    subtitulo: 'Frontend Developer',
    asignatura1: 'Desarrollo Web',
    asignatura2: 'JavaScript',
    asignatura3: 'React',
    subtitulo2: 'Backend Developer',
    asignatura4: 'NodeJs | En curso',
  },

  {
    ano: '2022',
    institucion: 'OpenBootcamp',
    carrera: 'Java | En curso',
    subtitulo: 'Java Junior',
    asignatura1: 'Git | En curso',
    asignatura2: 'Java Basico',
    asignatura3: 'Java Avanzado'
  }
  
]


const Cv = () => {
  return (
    <div id='cv' className='cv section__padding'>
      <div className='cv__heading'>
        <div>
        <img src={Avatar} alt="Avatar" className='cv__avatar' />
        </div>
        <div>
        <h1>Hoja de ruta</h1>
        <h4>Frontend Developer</h4>
        <p>Soy Desarrolador Frontend enfocado en
tecnologias web. En este momento mis
aptitudes se centran en tecnologias basadas
en Javascript. Disfruto estar siempre
aprendiendo cosas nuevas y llevarlas a su
maximo posible.</p>
        </div>
      </div>
      <div className='cv__container'>
        {cvData.map((item, index) => (
          <Maparuta
          key={item.institucion + index}
          ano={item.ano}
          institucion={item.institucion}
          carrera={item.carrera}
          subtitulo={item.subtitulo}
          asignatura1={item.asignatura1}
          asignatura2={item.asignatura2}
          asignatura3={item.asignatura3}
          subtitulo2={item.subtitulo2}
          asignatura4={item.asignatura4}
          />
        )
        )}
      </div>

    </div>
  )
}

export default Cv