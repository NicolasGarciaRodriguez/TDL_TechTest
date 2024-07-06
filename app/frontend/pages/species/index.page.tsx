import React, { useState } from 'react'
import NavbarComponent from '../../components/navbar/Navbar.component'
import SpeciesComponent from './Species.component'
import './Species.styles.scss';

const SpeciesPage = () => {

  return (
    <>
      <NavbarComponent />
      <div className='content'>
        <SpeciesComponent />
      </div>
    </>
  )
}

export default SpeciesPage