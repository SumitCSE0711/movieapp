import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUserCircle } from 'react-icons/fa';

const Header = ({ addMovieToList, setFilterType }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleFilter = (type) => {
    setFilterType(type); // Set the selected filter type
  };

  return (
    <header style={styles.header}>
      <h1>Movie & Show Tracker</h1>
      <nav style={styles.nav}>
        <button onClick={toggleMenu} style={styles.menuButton}><FaBars size={24} /></button>
        {menuOpen && (
          <div style={styles.menu}>
            <button onClick={() => handleFilter('movie')} style={styles.menuItem}>Filter Movies</button>
            <button onClick={() => handleFilter('show')} style={styles.menuItem}>Filter Shows</button>
          </div>
        )}
        <Link to="/mylist" style={styles.link}>
          <FaUserCircle size={24} />
        </Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#333',
    color: '#fff',
    boxShadow: '0 4px 2px -2px gray',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
  },
  menuButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#fff',
    fontSize: '24px',
    marginLeft: '20px',
  },
  menu: {
    position: 'absolute',
    top: '60px',
    right: '30px',
    backgroundColor: '#444',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  menuItem: {
    padding: '10px',
    color: '#fff',
    background: '#333',
    border: 'none',
    borderRadius: '5px',
    marginBottom: '10px',
    cursor: 'pointer',
    textAlign: 'center',
    width: '100%',
  },
  link: {
    color: '#fff',
    marginLeft: '15px',
    textDecoration: 'none',
  },
};

export default Header;
