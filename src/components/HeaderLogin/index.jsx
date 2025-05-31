import './styles.css'
import { useState } from 'react'
import logo from '../../assets/Header/logo.svg'
import X from '../../assets/Header/x.svg'
import instagram from '../../assets/Header/instagram.svg'
import youtube from '../../assets/Header/youtube.svg'
import facebook from '../../assets/Header/facebook.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="ContainerHeaderLogin">
        <img className="logoHeader" src={logo} alt="Logo faculdade SESI" />

        <div
          className={`hamburguer-menu ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon
            icon={menuOpen ? faTimes : faBars}
            className="icon-transition"
          />
        </div>
        <nav className={`navHeader ${menuOpen ? 'open' : ''}`}>
          <ul className="list_institucionesLogin">
            <li>FIESP</li>
            <li>CIESP</li>
            <li>SESI</li>
            <li>SENAI</li>
          </ul>
          <ul className="list_social-mediaLogin">
            <li>
              <img src={X} alt="Logo X" />
            </li>
            <li>
              <img src={instagram} alt="Instagram" />
            </li>
            <li>
              <img src={youtube} alt="YouTube" />
            </li>
            <li>
              <img src={facebook} alt="Facebook" />
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
