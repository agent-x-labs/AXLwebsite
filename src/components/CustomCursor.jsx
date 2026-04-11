import React, { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const dotRef = useRef(null)
  const outlineRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canUseCustomCursor = window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches

    if (!canUseCustomCursor) {
      return
    }

    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX
      mouse.current.y = event.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)
    let frameId

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3D(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
        outlineRef.current.style.transform = `translate3D(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }

      frameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <>
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 hidden h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999] lg:block"
        style={{ transition: 'transform 0.1s ease-out' }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 hidden h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999] lg:block"
      />
    </>
  )
}

export default CustomCursor
