import React, { useState } from 'react'
import NavbarComponent from '../../components/navbar/Navbar.component'
import PeopleComponent from './People.component'
import './People.styles.scss';

const PeoplePage = () => {

  return (
    <>
      <NavbarComponent />
      <div className='content'>
        <PeopleComponent />
      </div>
    </>
  )
}

export default PeoplePage