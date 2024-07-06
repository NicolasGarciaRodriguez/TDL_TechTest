import React, { useState } from 'react'
import NavbarComponent from '../../components/navbar/Navbar.component'
import './Starships.styles.scss';
import StarshipsComponent from './starships.component';

const StarshipsPage = () => {

  return (
    <>
      <NavbarComponent />
      <div className='content'>
        <StarshipsComponent />
      </div>
    </>
  )
}

export default StarshipsPage