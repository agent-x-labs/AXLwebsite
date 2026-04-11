import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'

const MarketingShell = ({ children, theme = 'dark' }) => {
  return (
    <div className="relative bg-white dark:bg-black transition-colors">
      <Navbar theme={theme} />
      <main>{children}</main>
      <Footer theme={theme} />
      <CustomCursor />
    </div>
  )
}

export default MarketingShell
