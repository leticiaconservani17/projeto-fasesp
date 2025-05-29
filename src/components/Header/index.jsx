import './styles.css'
import logo from '../../assets/Header/logo.svg'

function Header() {
  return (
    <>
      <div className="Container">
        <img className="logo" src={logo} alt="Logo faculdade SESI" />
        <nav>
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
