import { useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'

function SplitText({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete,
  showCallback = false,
}) {
  const containerRef = useRef(null)
  const segmentRefs = useRef([])
  const hasAnimated = useRef(false)
  const Tag = tag

  const segments = useMemo(() => {
    if (!text) return []

    if (splitType === 'words') {
      const words = text.split(' ')
      return words.map((word, index) => ({
        key: `word-${index}-${word}`,
        value: `${word}${index < words.length - 1 ? ' ' : ''}`,
      }))
    }

    if (splitType === 'lines') {
      const lines = text.split(/\r?\n/)
      return lines.map((line, index) => ({ key: `line-${index}`, value: line }))
    }

    return Array.from(text).map((char, index) => ({
      key: `char-${index}`,
      value: char,
    }))
  }, [splitType, text])

  useEffect(() => {
    segmentRefs.current = segmentRefs.current.slice(0, segments.length)
  }, [segments.length])

  useEffect(() => {
    const container = containerRef.current
    if (!container || segments.length === 0) return

    const targets = segmentRefs.current.filter(Boolean)
    if (targets.length === 0) return

    gsap.set(targets, from)

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting || hasAnimated.current) return

        hasAnimated.current = true

        gsap.to(targets, {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          onComplete: () => {
            if (showCallback) {
              console.log('All letters have animated!')
            }
            if (onLetterAnimationComplete) {
              onLetterAnimationComplete()
            }
          },
        })

        observer.disconnect()
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [delay, duration, ease, from, onLetterAnimationComplete, rootMargin, segments.length, showCallback, threshold, to])

  return (
    <Tag ref={containerRef} className={className} style={{ textAlign }}>
      {splitType === 'lines'
        ? segments.map((segment, index) => (
            <span key={segment.key} style={{ display: 'block', overflow: 'hidden' }}>
              <span
                ref={(el) => {
                  if (el) segmentRefs.current[index] = el
                }}
                style={{ display: 'inline-block', whiteSpace: 'pre' }}
              >
                {segment.value}
              </span>
            </span>
          ))
        : segments.map((segment, index) => (
            <span
              key={segment.key}
              ref={(el) => {
                if (el) segmentRefs.current[index] = el
              }}
              style={{ display: 'inline-block', whiteSpace: 'pre' }}
            >
              {segment.value}
            </span>
          ))}
    </Tag>
  )
}

export default SplitText
