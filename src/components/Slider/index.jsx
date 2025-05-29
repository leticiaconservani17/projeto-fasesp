import { useState } from 'react'
import './styles.css'
import Banner1 from '../../assets/b002e1ddfd657f632b651ec19174a9a5149ed16a.png'
import arrowRight from '../../assets/Slider/arrowRight.svg'
import arrowLeft from '../../assets/Slider/arrowLeft.svg'

const banners = [
  { id: 1, img: Banner1 },
  { id: 2, img: Banner1 },
  { id: 3, img: Banner1 }
]

function Slider() {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 1) % banners.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <div>
      <div className="slider">
        <div className="slider-container">
          <button className="arrow left" onClick={prev}>
            <img src={arrowRight} alt="Anterior" />
          </button>

          <div className="slider-content">
            <img src={banners[index].img} alt={`Banner ${index + 1}`} />
          </div>

          <button className="arrow right" onClick={next}>
            <img src={arrowLeft} alt="Próximo" />
          </button>
          <div className="slider-dots">
            {banners.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
