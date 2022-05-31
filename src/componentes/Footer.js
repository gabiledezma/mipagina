import React from 'react';
import logo from "../logogl.jpg";

export default function Footer() {
  return (
    <footer className="contenedor">
        <img className="logoFooter" src={logo} alt="logo" /> || Copyright © 2022 Gabriel Ledezma || Contact: <a rel="nofollow" className='link' href="https://www.linkedin.com/in/gabrielagustinledezma/">LinkedIn</a> ||      
    </footer>
  )
}