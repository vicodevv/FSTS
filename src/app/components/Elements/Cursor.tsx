import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const Cursor = () => {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current

    const onMouseMove = (e: { clientX: number; clientY: number }) => {
      gsap.to(cursor, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        ease: 'sine.out',
      })
    }

    document.addEventListener('mousemove', onMouseMove)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return <div className="custom-cursor" ref={cursorRef} />
}

export default Cursor
