import './styles.css'
import logo from '../../assets/Header/logo.svg'
import X from '../../assets/Header/x.svg'
import instagram from '../../assets/Header/instagram.svg'
import youtube from '../../assets/Header/youtube.svg'
import facebook from '../../assets/Header/facebook.svg'

function Header() {
  return (
    <>
      <div className="Container">
        <img className="logo" src={logo} alt="Logo faculdade SESI" />
        <nav>
          <ul className="list_instituciones">
            <li>FIESP</li>
            <li>CIESP</li>
            <li>SESI</li>
            <li>SENAI</li>
          </ul>
          <ul className="list_social-media">
            <li>
              <img src={X} alt="Logo X" />
            </li>
            <li>
              <img src={instagram} alt="" />
            </li>
            <li>
              <img src={youtube} alt="" />
            </li>
            <li>
              <img src={facebook} alt="" />
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
