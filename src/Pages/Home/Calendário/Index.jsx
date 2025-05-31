import './styles.css'

const daysOfWeek = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM']
const daysInMonth = 31
const startDay = 3 // Começa numa quinta-feira (0 = SEG)

const events = [9, 12, 21, 23, 31]

function Calendar() {
  const cells = []

  for (let i = 0; i < startDay; i++) {
    cells.push(<div className="cell empty" key={`empty-${i}`} />)
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isEvent = events.includes(day)
    cells.push(
      <div className="cell" key={day}>
        <span className="day">{day}</span>
        {isEvent && <div className="event">Evento</div>}
      </div>
    )
  }

  const totalCells = startDay + daysInMonth
  const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7)

  for (let i = 0; i < remainingCells; i++) {
    cells.push(<div className="cell empty" key={`empty-end-${i}`} />)
  }

  return (
    <div className="calendarContent">
      <div className="calendar">
        <div className="header-calendar">
          {daysOfWeek.map((day) => (
            <div className="header-cell" key={day}>
              {day}
            </div>
          ))}
        </div>
        <div className="body">{cells}</div>
      </div>
    </div>
  )
}

export default Calendar
