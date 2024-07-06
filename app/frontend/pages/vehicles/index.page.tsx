import React, { useState } from 'react'
import NavbarComponent from '../../components/navbar/Navbar.component'
import VehiclesComponent from './Vehicles.component'
import './Vehicles.styles.scss';

const VehiclesPage = () => {

  return (
    <>
      <NavbarComponent />
      <div className='content'>
        <VehiclesComponent />
      </div>
    </>
  )
}

export default VehiclesPage