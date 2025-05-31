import './styles.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const bimestres = [
  '2024 | 1º Bimestre',
  '2024 | 2º Bimestre',
  '2023 | 4º Bimestre'
]

const andamento = [
  {
    id: 4,
    nome: 'UC 4 - Fundamentos da Educação Inclusiva',
    progresso: 60
  },
  {
    id: 5,
    nome: 'UC 5 - Metodologias Ativas no Ensino',
    progresso: 10
  },
  {
    id: 6,
    nome: 'UC 6 - Psicologia do Desenvolvimento Infantil',
    progresso: 30
  }
]

const cursadas = [
  {
    id: 1,
    nome: 'UC 1 - Didática e Práticas Pedagógicas'
  },
  {
    id: 2,
    nome: 'UC 2 - História da Educação Brasileira'
  },
  {
    id: 3,
    nome: 'UC 3 - Tecnologia e Educação: Novas Perspectivas'
  }
]

function UnidadeCurricular() {
  const [selected, setSelected] = useState(bimestres[0])
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const CardClick = (nome) => {
    const id = nome
    navigate(`/unidade/${id}`)
  }

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
            <div
              className="uc-card"
              key={index}
              onClick={() => CardClick(uc.nome)}
            >
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
