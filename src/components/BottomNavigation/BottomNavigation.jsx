import { FaHome, FaEnvelope, FaQrcode, FaHandshake, FaUserAlt } from 'react-icons/fa'
import './BottomNavigation.css'

const BottomNavigation = () => {
  return (
    <nav className="bottom-navigation">
      <div className="bottom-nav-container">
        <button 
          className="bottom-nav-item active"
          aria-label="Home"
        >
          <FaHome />
        </button>
        
        <button 
          className="bottom-nav-item"
          aria-label="Messages"
        >
          <FaEnvelope />
        </button>
        
        <button 
          className="bottom-nav-item scan-button"
          aria-label="Scan QR Code"
        >
          <FaQrcode />
        </button>
        
        <button 
          className="bottom-nav-item"
          aria-label="Handshake"
        >
          <FaHandshake />
        </button>
        
        <button 
          className="bottom-nav-item"
          aria-label="Profile"
        >
          <FaUserAlt />
        </button>
      </div>
    </nav>
  )
}

export default BottomNavigation