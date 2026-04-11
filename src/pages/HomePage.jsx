import React from 'react'
import Hero from '../components/Hero'
import PainPoints from '../components/PainPoints'
import Services from '../components/Services'
import OurWork from '../components/OurWork'
import Teams from '../components/Teams'
import ContactUs from '../components/ContactUs'
import MarketingShell from '../layouts/MarketingShell'

const HomePage = () => {
  return (
    <MarketingShell>
      <Hero />
      <PainPoints />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
    </MarketingShell>
  )
}

export default HomePage
