import { useEffect, useRef, useState } from 'react'

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function HeroSection({ hero }) {
  const stageRef = useRef(null)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    let frameId = null

    const updateMotion = () => {
      frameId = null
      const stageElement = stageRef.current
      const sectionElement = stageElement?.closest('.hero-section')
      if (!stageElement || !sectionElement) {
        return
      }

      const sectionRect = sectionElement.getBoundingClientRect()
      const viewportHeight = window.innerHeight || 1

      const isSmallScreen = window.matchMedia('(max-width: 768px)').matches
      if (isSmallScreen) {
        setOffsetY(0)
        return
      }

      if (sectionRect.bottom <= -viewportHeight || sectionRect.top >= viewportHeight) {
        return
      }

      const parallaxValue = clamp((-sectionRect.top - viewportHeight * 0.15) * 0.28, -260, 0)
      setOffsetY(parallaxValue)
    }

    const onScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateMotion)
      }
    }

    updateMotion()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      ref={stageRef}
      className="hero-stage"
      role="img"
      aria-label="Industrial machine for coating"
    >
      <div
        className="hero-stage-media"
        aria-hidden="true"
        style={{
          backgroundImage: `url(${hero.backgroundImage})`,
          translate: 'none',
          rotate: 'none',
          scale: 'none',
          transform: `translate3d(0px, ${offsetY.toFixed(2)}px, 0px)`,
        }}
      ></div>
      <div className="hero-stage-overlay"></div>
      <div className="hero-stage-content">
        <h1 className="hero-stage-content-title">{hero.title}</h1>
        <p className="hero-stage-content-subtitle">{hero.subtitle}</p>
      </div>
    </div>
  )
}

export default HeroSection
