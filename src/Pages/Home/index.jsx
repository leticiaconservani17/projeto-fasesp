import { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Slider from '../../components/Slider'
import './styles.css'
import UnidadeCurricular from './Unidade curricular'
import Calendar from './Calendário/Index'
import SistemasSatelites from './SistemaSatélites'

function Home() {
  const [activeTab, setActiveTab] = useState('Unidade curricular')

  const renderContent = () => {
    switch (activeTab) {
      case 'Unidade curricular':
        return <UnidadeCurricular />
      case 'Calendário':
        return <Calendar />
      case 'Notas':
        return <p>Conteúdo das Notas</p>
      case 'Sistemas satélites':
        return <SistemasSatelites />
      default:
        return null
    }
  }

  const menuItems = [
    'Unidade curricular',
    'Calendário',
    'Notas',
    'Sistemas satélites'
  ]

  return (
    <>
      <Header />
      <Slider />
      <div className="content">
        <div className="header">
          <div className="title">
            <p>Meu curso</p>
            <h1>Pedagogia</h1>
          </div>
          <div className="nav">
            <ul>
              {menuItems.map((item) => (
                <li
                  key={item}
                  className={activeTab === item ? 'active' : ''}
                  onClick={() => setActiveTab(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="tab-content">{renderContent()}</div>
      </div>
      <Footer />
    </>
  )
}

export default Home
