import { useState, useRef, useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Slider from '../../components/Slider'
import './styles.css'
import UnidadeCurricularDetail from './Unidade curricular'
import Calendar from './Calendário/Index'
import SistemasSatelites from './SistemaSatélites'
import Notas from './Notas'

const menuItems = [
  'Unidade curricular',
  'Calendário',
  'Notas',
  'Sistemas satélites'
]

function Home() {
  const [activeTab, setActiveTab] = useState('Unidade curricular')
  const itemRefs = useRef([])
  const [showArrows, setShowArrows] = useState(false)

  const tabsRef = useRef(null)

  const scrollTabs = (direction) => {
    const currentIndex = menuItems.indexOf(activeTab)

    if (direction === 'left' && currentIndex > 0) {
      setActiveTab(menuItems[currentIndex - 1])
    } else if (direction === 'right' && currentIndex < menuItems.length - 1) {
      setActiveTab(menuItems[currentIndex + 1])
    }
  }

  useEffect(() => {
    const checkOverflow = () => {
      if (tabsRef.current) {
        const { scrollWidth, clientWidth } = tabsRef.current
        setShowArrows(scrollWidth > clientWidth)
      }
    }

    const timeout = setTimeout(checkOverflow, 100)

    window.addEventListener('resize', checkOverflow)
    return () => {
      clearTimeout(timeout)
      window.removeEventListener('resize', checkOverflow)
    }
  }, [])

  useEffect(() => {
    const index = menuItems.indexOf(activeTab)
    const el = itemRefs.current[index]
    const parent = tabsRef.current

    if (el && parent) {
      const elLeft = el.offsetLeft
      const elWidth = el.offsetWidth
      const parentWidth = parent.offsetWidth

      const scrollTo = elLeft - parentWidth / 2 + elWidth / 2

      parent.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      })
    }
  }, [activeTab])

  const renderContent = () => {
    switch (activeTab) {
      case 'Unidade curricular':
        return <UnidadeCurricularDetail />
      case 'Calendário':
        return <Calendar />
      case 'Notas':
        return <Notas />
      case 'Sistemas satélites':
        return <SistemasSatelites />
      default:
        return null
    }
  }

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
            {showArrows && (
              <button
                className="nav-arrow left"
                onClick={() => scrollTabs('left')}
              >
                <span className="material-symbols-outlined">
                  arrow_back_ios
                </span>
              </button>
            )}

            <div
              className="nav-scroll"
              ref={tabsRef}
              style={{
                '--show-arrows': showArrows ? 'block' : 'none'
              }}
            >
              <ul>
                {menuItems.map((item, index) => (
                  <li
                    key={item}
                    ref={(el) => (itemRefs.current[index] = el)}
                    className={activeTab === item ? 'active' : ''}
                    onClick={() => setActiveTab(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {showArrows && (
              <button
                className="nav-arrow right"
                onClick={() => scrollTabs('right')}
              >
                <span className="material-symbols-outlined">
                  arrow_forward_ios
                </span>
              </button>
            )}
          </div>
        </div>

        <div className={`tab-content slide`}>{renderContent()}</div>
      </div>
      <Footer />
    </>
  )
}

export default Home
