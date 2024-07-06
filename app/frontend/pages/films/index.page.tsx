import React, { useState } from 'react'
import NavbarComponent from '../../components/navbar/Navbar.component'
import FilmsComponent from './Films.component'
import './Films.styles.scss';

const FilmsPage = () => {

  return (
    <>
      <NavbarComponent />
      <div className='content'>
        <FilmsComponent />
      </div>
    </>
  )
}

export default FilmsPage