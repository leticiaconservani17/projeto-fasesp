import { useEffect, useState, useRef } from 'react'
import './styles.css'
import Banner1 from '../../assets/b002e1ddfd657f632b651ec19174a9a5149ed16a.png'
import arrowRight from '../../assets/Slider/arrowRight.svg'
import arrowLeft from '../../assets/Slider/arrowLeft.svg'
import Banner2 from '../../assets/er_1.jpg'

const banners = [
  { id: 1, img: Banner1 },
  { id: 2, img: Banner2 },
  { id: 3, img: Banner1 }
]

function Slider() {
  const intervalRef = useRef(null)
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 1) % banners.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + banners.length) % banners.length)
  }

  const startSlider = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(next, 5000)
    }
  }

  const stopSlider = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  useEffect(() => {
    startSlider()
    return () => stopSlider()
  }, [])

  return (
    <div
      className="slider"
      onMouseEnter={stopSlider}
      onMouseLeave={startSlider}
      onTouchStart={stopSlider}
      onTouchEnd={startSlider}
    >
      <div className="slider-container">
        {banners.length > 1 && (
          <button className="arrow left" onClick={prev}>
            <img src={arrowRight} alt="Anterior" />
          </button>
        )}

        <div className="slider-content">
          {banners.map((banner, i) => (
            <img
              key={banner.id}
              src={banner.img}
              alt={`Banner ${i + 1}`}
              className={`slider-image ${i === index ? 'active' : ''}`}
            />
          ))}
        </div>

        {banners.length > 1 && (
          <button className="arrow right" onClick={next}>
            <img src={arrowLeft} alt="Próximo" />
          </button>
        )}

        {banners.length > 1 && (
          <div className="slider-dots">
            {banners.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Slider
