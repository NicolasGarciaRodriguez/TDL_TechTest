import React, { useState } from 'react'
import NavbarComponent from '../../components/navbar/Navbar.component'
import PlanetsComponent from './Planets.component'
import './Planets.styles.scss';

const PlanetsPage = () => {

  return (
    <>
      <NavbarComponent />
      <div className='content'>
        <PlanetsComponent />
      </div>
    </>
  )
}

export default PlanetsPage