import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Navbar'
import Contacto from './components/contacto/Contacto'
import Cv from './components/cv/Cv'

const App = () => {
  return (
    <>
      <Header/>
      <Cv/>
      <Contacto/>
      <Nav/>
    </>
  )
}

export default App
