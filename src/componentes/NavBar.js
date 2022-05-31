import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='nav'>
        <Link className='link' to='/'>Introducción</Link>
        <Link className='link' to='/sobreMi'>Sobre mí</Link>
        <Link className='link' to='/experiencia'>Repositorios y Lenguajes</Link>
        <Link className='link' to='/contacto'>Contacto</Link>
        <Link className='link' to='/cv'>Curriculum</Link>
    </nav>
  )
}