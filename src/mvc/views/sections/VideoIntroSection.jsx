import { useMemo, useState } from 'react'
import introVideoOne from '../../../assets/WhatsApp Video 2026-03-25 at 9.41.51 PM.mp4'
import introVideoTwo from '../../../assets/WhatsApp Video 2026-03-25 at 9.46.27 PM.mp4'

function VideoIntroSection() {
  const [videoIndex, setVideoIndex] = useState(0)
  const [transitionSeed, setTransitionSeed] = useState(0)
  const [isSecondVideoSliding, setIsSecondVideoSliding] = useState(false)

  const videos = useMemo(() => [introVideoOne, introVideoTwo], [])
  const videoTitles = useMemo(
    () => ['ALUMINIUM SEPRATOR MACHINE', 'DRY WET LAMINATION COATING MACHINE'],
    [],
  )

  const onVideoEnded = () => {
    setVideoIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % videos.length
      setIsSecondVideoSliding(nextIndex === 1)
      setTransitionSeed((prevSeed) => prevSeed + 1)
      return nextIndex
    })
  }

  return (
    <div className="video-intro-stage">
      <video
        key={`${videos[videoIndex]}-${transitionSeed}`}
        className={`video-intro-player${isSecondVideoSliding ? ' video-intro-player-slide-in' : ''}`}
        autoPlay
        muted
        playsInline
        onEnded={onVideoEnded}
        onAnimationEnd={() => {
          if (isSecondVideoSliding) {
            setIsSecondVideoSliding(false)
          }
        }}
      >
        <source src={videos[videoIndex]} type="video/mp4" />
      </video>
      <div className="video-intro-label-wrap">
        <p className="video-intro-label">{videoTitles[videoIndex]}</p>
      </div>
    </div>
  )
}

export default VideoIntroSection
