import './styles.css'
import logoSESI from '../../assets/Footer/SESI-logo.svg'

function Footer() {
  return (
    <footer className="footerLogin">
      <div className="footerLogin-content">
        <img src={logoSESI} alt="" />
        <p> Copyright &copy; Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
