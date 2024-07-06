import React, { useState } from 'react';
import Link from 'next/link';
import './Navbar.styles.scss';

const NavbarComponent = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };

  return (
    <>
    <div className={`navbar${!isOpen ? 'closed' : ''}`}>
      <button className='toggle_button' onClick={toggleNavbar}>
        Menu
      </button>
      {isOpen && (
              <nav className='nav_links'>
              <Link href="/planets">Planets</Link>
              <Link href="/starships">Starships</Link>
              <Link href="/vehicles">Vehicles</Link>
              <Link href="/people">People</Link>
              <Link href="/films">Films</Link>
              <Link href="/species">Species</Link>
            </nav>
      )}
    </div>
    </>
  )
}

export default NavbarComponent