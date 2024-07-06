import React, { useState } from 'react';
import Link from 'next/link';
import './Navbar.styles.scss';
import { NavbarService } from './Navbar.service';
import router from 'next/router';

const NavbarComponent = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      const response = await NavbarService();
      if (!response) {
        router.push('/login');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <div className={`navbar ${!isOpen ? 'closed' : ''}`}>
      <button className="toggle_button" onClick={toggleNavbar}>
        ☰
      </button>
      {isOpen && (
        <nav className="nav_links">
          <div className="nav_item"><Link href="/planets">Planets</Link></div>
          <div className="nav_item"><Link href="/starships">Starships</Link></div>
          <div className="nav_item"><Link href="/vehicles">Vehicles</Link></div>
          <div className="nav_item"><Link href="/people">People</Link></div>
          <div className="nav_item"><Link href="/films">Films</Link></div>
          <div className="nav_item"><Link href="/species">Species</Link></div>
          <button className="logout_button" onClick={handleLogout}>Logout</button>
        </nav>
      )}
    </div>
    </>
  )
}

export default NavbarComponent