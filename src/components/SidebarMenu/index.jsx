import { useState } from 'react'
import './styles.css'

function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}

      <div className={`sidebar-panel ${isOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={closeMenu}>Item 1</li>
          <li onClick={closeMenu}>Item 2</li>
          <li onClick={closeMenu}>Item 3</li>
          <li onClick={closeMenu}>Item 4</li>
        </ul>
      </div>

      <div className="sidebar-menu">
        <span className="material-symbols-outlined" onClick={toggleMenu}>
          format_list_bulleted
        </span>
      </div>
    </>
  )
}

export default SidebarMenu
