import Header from '../../components/HeaderLogin'
import Footer from '../../components/FooterLogin'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import logoSESI from '../../assets/Login/logo-sesi.svg'
import logoFACULDADE from '../../assets/Login/logo-faculdade.svg'

function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="Login">
      <Header />
      <div className="background" />
      <div className="login-content">
        <div className="login-box">
          <div className="logos">
            <img src={logoSESI} alt="Logo SESI" className="logoSESI" />
            <img
              src={logoFACULDADE}
              alt="Logo Faculdade"
              className="logo-img logoDivision"
            />
          </div>

          <h2>Login</h2>
          <form className="login-form">
            <label className="user-form-label">
              Usuário
              <input
                type="text"
                name="usuario"
                placeholder="Digite seu usuário"
                className="user-form-input"
              />
            </label>
            <label className="user-form-label password-label">
              Senha
              <input
                type={showPassword ? 'text' : 'password'}
                name="senha"
                placeholder="Digite sua senha"
                className="user-form-input"
              />
              <span
                className="icon-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className="password-icon">
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </i>
              </span>
            </label>
            <div className="login-options">
              <label className="checkbox">
                <input type="checkbox" />
                Lembrar de mim
              </label>
              <a className="forgot-password" href="#">
                Esqueci minha senha
              </a>
            </div>
            <button className="login-button" type="submit">
              Entrar
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Login
