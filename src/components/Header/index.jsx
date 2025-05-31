import './styles.css'
import logo from '../../assets/Header/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="ContainerHeader">
        <img className="logo" src={logo} alt="Logo faculdade SESI" />
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
          <ul className="list_instituciones">
            <li>Início</li>
            <li>Cursos Livres</li>
            <li>Perfíl</li>
            <li>Sair</li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
