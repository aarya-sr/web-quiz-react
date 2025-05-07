import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category from './components/Category'
import Instructions from './components/Instructions'
import Testpage from './components/Testpage'
import Report from './components/Report'
import CTASection from './components/CTASection'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Category/>
    <Instructions/>
    <Testpage/>
    <Report/>
    <CTASection/>
    </>
  )
}

export default App