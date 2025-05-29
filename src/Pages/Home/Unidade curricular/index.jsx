import './styles.css'
import { useState } from 'react'

const bimestres = [
  '2024 | 1º Bimestre',
  '2024 | 2º Bimestre',
  '2023 | 4º Bimestre'
]

const andamento = [
  {
    nome: 'UC 4 - Fundamentos da Educação Inclusiva',
    progresso: 60
  },
  {
    nome: 'UC 5 - Metodologias Ativas no Ensino',
    progresso: 10
  },
  {
    nome: 'UC 6 - Psicologia do Desenvolvimento Infantil',
    progresso: 30
  }
]

const cursadas = [
  {
    nome: 'UC 1 - Didática e Práticas Pedagógicas'
  },
  {
    nome: 'UC 2 - História da Educação Brasileira'
  },
  {
    nome: 'UC 3 - Tecnologia e Educação: Novas Perspectivas'
  }
]

function UnidadeCurricular() {
  const [selected, setSelected] = useState(bimestres[0])
  const [open, setOpen] = useState(false)

  const toggleDropdown = () => setOpen(!open)
  const handleSelect = (item) => {
    setSelected(item)
    setOpen(false)
  }

  return (
    <div>
      <div className="uc">
        <h3>Em andamento</h3>
        <div className="uc-list">
          {andamento.map((uc, index) => (
            <div className="uc-card" key={index}>
              <h4>{uc.nome}</h4>
              <div className="uc-progress">
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${uc.progresso}%` }}
                  ></div>
                </div>
                <span className="percent">{uc.progresso}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="uc">
        <h3>Cursadas</h3>
        <div className="dropdown">
          <div className="dropdown-header" onClick={toggleDropdown}>
            {selected}
          </div>

          {open && (
            <ul className="dropdown-list">
              {bimestres.map((item) => (
                <li key={item} onClick={() => handleSelect(item)}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="uc-list">
          {cursadas.map((uc, index) => (
            <div className="uc-card completed" key={index}>
              <h4>{uc.nome}</h4>
              <div className="uc-progress">
                <div className="progress-bar green">
                  <div className="progress green full"></div>
                </div>
                <span className="percent">Concluído</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UnidadeCurricular
