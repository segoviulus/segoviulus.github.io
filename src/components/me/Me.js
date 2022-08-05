import React from 'react'
import Avatar2 from '../../assets/meavatar2.png'
import {TbCheese} from 'react-icons/tb'


const Me = () => {
  return (
    <section id='sobremi'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className='container sobremiContainer'>
        <div className='sobremi'>
          <div className="sobremi__img">
            <img src={Avatar2} alt="" />
          </div>
        </div>
        <div className='sobremi__content'>
          <div className="sobremi__cards">
            <article className='sobremi__card'>
              <TbCheese className='sobremi__icon'/>
              <h5>Experiencia</h5>
              <small>Lorem ipsum dolor sit</small>
            </article>

            <article className='sobremi__card'>
              <TbCheese className='sobremi__icon'/>
              <h5>Experiencia</h5>
              <small>Lorem ipsum dolor sit</small>
            </article>

            <article className='sobremi__card'>
              <TbCheese className='sobremi__icon'/>
              <h5>Experiencia</h5>
              <small>Lorem ipsum dolor sit</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut, aliquam eaque nisi, accusamus totam velit, veritatis ea hic qui illum reiciendis! Labore velit amet autem quas ipsum optio consectetur.</p>

          <a href="#contacto" className='btn btn-primary'>Contame tus ideas!</a>

        </div>
      </div>
    </section>
  )
}

export default Me