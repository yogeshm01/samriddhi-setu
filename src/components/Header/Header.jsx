import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <button 
          className="menu-button" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <FaBars />
        </button>
        
        <h1 className="logo">Samriddhi Setu</h1>
        
        <div className="profile-container">
          <img 
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Profile" 
            className="profile-image" 
          />
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Community Hub</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header