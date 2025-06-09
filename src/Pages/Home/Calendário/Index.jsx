import { useState } from 'react'
import './styles.css'

const diasSemana = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM']

const eventosFixos = {
  '2025-05': [9, 12, 21, 23, 31],
  '2025-07': [1, 10, 21],
  '2025-08': [5, 15, 31]
}

function Calendar() {
  const hoje = new Date()
  const [ano, setAno] = useState(hoje.getFullYear())
  const [mes, setMes] = useState(hoje.getMonth())

  const nomeMeses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  const diasNoMes = new Date(ano, mes + 1, 0).getDate()
  const primeiroDiaSemana = new Date(ano, mes, 1).getDay()
  const startDay = primeiroDiaSemana === 0 ? 6 : primeiroDiaSemana - 1

  const keyMesAno = `${ano}-${String(mes + 1).padStart(2, '0')}`
  const eventosDoMes = eventosFixos[keyMesAno] || []

  const cells = []

  for (let i = 0; i < startDay; i++) {
    cells.push(<div className="cell empty" key={`empty-${i}`} />)
  }

  for (let dia = 1; dia <= diasNoMes; dia++) {
    const temEvento = eventosDoMes.includes(dia)
    cells.push(
      <div className="cell" key={dia}>
        <span className="day">{dia}</span>
        {temEvento && <div className="event">Evento</div>}
      </div>
    )
  }

  const totalCells = startDay + diasNoMes
  const finalEspacos = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7)

  for (let i = 0; i < finalEspacos; i++) {
    cells.push(<div className="cell empty" key={`end-empty-${i}`} />)
  }

  const voltarMes = () => {
    if (mes === 0) {
      setMes(11)
      setAno(ano - 1)
    } else {
      setMes(mes - 1)
    }
  }

  const avancarMes = () => {
    if (mes === 11) {
      setMes(0)
      setAno(ano + 1)
    } else {
      setMes(mes + 1)
    }
  }

  return (
    <div className="calendarContent">
      <div className="calendar">
        <div className="month-control">
          <button onClick={voltarMes}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <span>
            {nomeMeses[mes]} {ano}
          </span>
          <button onClick={avancarMes}>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        <div className="header-calendar">
          {diasSemana.map((dia) => (
            <div className="header-cell" key={dia}>
              {dia}
            </div>
          ))}
        </div>

        <div className="body">{cells}</div>
      </div>
    </div>
  )
}

export default Calendar
