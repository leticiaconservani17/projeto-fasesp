import './styles.css'

function Notas() {
  const notas = [
    { uc: 'UC 1 - Fundamentos da Educação', nota: 9.5 },
    { uc: 'UC 2 - Desenvolvimento Infantil', nota: 8.7 },
    { uc: 'UC 3 - Didática Geral', nota: 7.9 },
    { uc: 'UC 4 - Educação Inclusiva', nota: 10 }
  ]

  return (
    <div className="notas-container">
      <ul className="notas-list">
        {notas.map((item, index) => (
          <li key={index} className="nota-item">
            <span className="uc-notas">{item.uc}</span>
            <span className="valor">{item.nota.toFixed(1)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Notas
