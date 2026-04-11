import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

const App = () => {
  const theme = 'dark'

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

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
      <CustomCursor />
    </div>
  )
}

export default App
