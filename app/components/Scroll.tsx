'use client';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { useState } from 'react';

const Header = () => {
  // Reference for the typed text element
  const typedElement = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize Typed.js with showCursor set to false
    const typed = new Typed(typedElement.current, {
      strings: ['Full stack Developer', 'Frontend Developer', 'Backend Developer'],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,
      showCursor: false, // Disable the cursor to remove the '|'
    });

    return () => {
      // Destroy the instance during cleanup to prevent memory leaks
      typed.destroy();
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='mb-5'>
      <div id="menu-icon" className={menuOpen ? 'bx-x' : ''} onClick={toggleMenu}>
        {/* <i className="bx bx-menu"></i> */}
      </div>

      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        {/* Add your navigation items here */}
      </nav>

      <div className="multiple-text text-2xl" ref={typedElement}></div>
    </header>
  );
};

export default Header;
