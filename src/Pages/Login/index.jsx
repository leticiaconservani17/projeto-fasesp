import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/HeaderLogin'
import Footer from '../../components/FooterLogin'
import './styles.css'
import logoSESI from '../../assets/Login/logo-sesi.svg'
import logoFACULDADE from '../../assets/Login/logo-faculdade.svg'
import checkIcon from '../../assets/check_circle_.svg'

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [erroUsuario, setErroUsuario] = useState('')
  const [erroSenha, setErroSenha] = useState('')
  const [usuarioValido, setUsuarioValido] = useState(false)
  const [senhaValida, setSenhaValida] = useState(false)

  const [lembrar, setLembrar] = useState(false)

  const [isRecovery, setIsRecovery] = useState(false)
  const [recoverySuccess, setRecoverySuccess] = useState(false)
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    const savedUser = localStorage.getItem('usuario')
    const savedPass = localStorage.getItem('senha')
    const rememberMe = localStorage.getItem('lembrar') === 'true'

    if (rememberMe && savedUser && savedPass) {
      setUsuario(savedUser)
      setSenha(savedPass)
      setLembrar(true)
      setUsuarioValido(savedUser === 'admin')
      setSenhaValida(savedPass === '123456')
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    let hasError = false

    if (usuario !== 'admin') {
      setErroUsuario('Usuário incorreto')
      hasError = true
    } else {
      setErroUsuario('')
    }

    if (senha !== '123456') {
      setErroSenha('Senha incorreta')
      hasError = true
    } else {
      setErroSenha('')
    }

    if (!hasError) {
      if (lembrar) {
        localStorage.setItem('usuario', usuario)
        localStorage.setItem('senha', senha)
        localStorage.setItem('lembrar', 'true')
      } else {
        localStorage.removeItem('usuario')
        localStorage.removeItem('senha')
        localStorage.removeItem('lembrar')
      }
      navigate(`/Home`)
    }
  }

  const isDisabled = usuario.trim() === '' || senha.trim() === ''
  const isRecoveryDisabled = cpf.trim() === '' || email.trim() === ''

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

          <h2>{isRecovery ? 'Recuperação de senha' : 'Login'}</h2>

          {!isRecovery ? (
            <form className="login-form" onSubmit={handleLogin}>
              <label className="user-form-label">
                Usuário
                <input
                  type="text"
                  placeholder="Digite seu usuário"
                  className={`user-form-input ${erroUsuario ? 'erro' : usuarioValido ? 'sucesso' : ''}`}
                  value={usuario}
                  onChange={(e) => {
                    const value = e.target.value
                    setUsuario(value)
                    setErroUsuario('')
                    setUsuarioValido(value === 'admin')
                  }}
                />
                {erroUsuario && <p className="mensagem-erro">{erroUsuario}</p>}
              </label>

              <label className="user-form-label password-label">
                Senha
                <div className="input-password">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Digite sua senha"
                    className={`user-form-input ${erroSenha ? 'erro' : senhaValida ? 'sucesso' : ''}`}
                    value={senha}
                    onChange={(e) => {
                      const value = e.target.value
                      setSenha(value)
                      setErroSenha('')
                      setSenhaValida(value === '123456')
                    }}
                  />
                  <span
                    className="material-symbols-outlined icon-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? 'visibility' : 'visibility_off'}
                  </span>
                </div>
                {erroSenha && <p className="mensagem-erro">{erroSenha}</p>}
              </label>

              <div className="login-options">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={lembrar}
                    onChange={(e) => setLembrar(e.target.checked)}
                  />
                  Lembrar de mim
                </label>
                <button
                  type="button"
                  className="forgot-password"
                  onClick={() => setIsRecovery(true)}
                >
                  Esqueci minha senha
                </button>
              </div>

              <button
                className={`login-button ${isDisabled ? 'disabled' : ''}`}
                type="submit"
                disabled={isDisabled}
              >
                Entrar
              </button>
            </form>
          ) : recoverySuccess ? (
            <div>
              <p className="sucess-title-recovery">
                <span>
                  <i>
                    <img src={checkIcon} alt="" style={{ width: '20px' }} />
                  </i>
                </span>
                Solicitação feita com sucesso!
              </p>
              <p
                className="sucess-message-recovery"
                style={{
                  color: '#736E70',
                  fontFamily: 'Open Sans'
                }}
              >
                Siga os passos indicados por email para finalizar a recuperação.
              </p>
              <button
                className="login-button"
                style={{ marginTop: '24px' }}
                onClick={() => {
                  setRecoverySuccess(false)
                  setIsRecovery(false)
                  setEmail('')
                  setCpf('')
                }}
              >
                Concluir
              </button>
            </div>
          ) : (
            <form
              className="login-form"
              onSubmit={(e) => {
                e.preventDefault()
                setRecoverySuccess(true)
              }}
            >
              <label className="user-form-label">
                Usuário
                <input
                  type="text"
                  placeholder="Digite seu usuário"
                  className="user-form-input"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </label>

              <label className="user-form-label">
                Email
                <input
                  type="email"
                  placeholder="nome@exemplo.org.br"
                  className="user-form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <button
                  type="button"
                  className="back-button"
                  onClick={() => setIsRecovery(false)}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ marginRight: '5px', fontWeight: '500' }}
                  >
                    west
                  </span>{' '}
                  Voltar
                </button>
                <button
                  type="submit"
                  className={`login-button ${isRecoveryDisabled ? 'disabled' : ''}`}
                  disabled={isRecoveryDisabled}
                >
                  Enviar
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login
