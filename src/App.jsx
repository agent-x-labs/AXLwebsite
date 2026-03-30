import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {
  const theme = 'dark'

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  // Refs for custom cursor position tracking 
  const mouse = useRef({x: 0, y: 0})
  const position = useRef({x: 0, y: 0})

  useEffect(() => {
    const canUseCustomCursor = window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches

    if (!canUseCustomCursor) {
      return
    }

    const handelMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handelMouseMove)
    let frameId

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3D(${mouse.current.x -6}px, ${mouse.current.y -6}px, 0)`
        outlineRef.current.style.transform = `translate3D(${position.current.x -20}px, ${position.current.y -20}px, 0)`
      }
      frameId = requestAnimationFrame(animate)
    }
    animate()

    return() => {
      document.removeEventListener('mousemove', handelMouseMove)
      cancelAnimationFrame(frameId)
    }
  },[])

  return (
    <div className="relative  bg-white dark:bg-black transition-colors">
      <Toaster />
      <Navbar theme={theme} />
      <Hero />
      <PainPoints />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />

      {/* Custom Cursor Ring */}
      <div ref={outlineRef} className="fixed top-0 left-0 hidden h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999] lg:block" 
      style={{transition: 'transform 0.1s ease-out'}}>
      </div>
      {/* Custom Cursor Dot */}
      <div ref={dotRef}  className="fixed top-0 left-0 hidden h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999] lg:block"></div>
    </div>
  )
}

export default App
