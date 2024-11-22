import React from 'react'
import './App.css'
import Hero from './components/Herosection/Hero'
import Program from './components/Programs/Programs'
import Reasons from './components/Reasons/Reasons'
import Plans from './components/Plans/Plans'
import Review from './components/Review/Review'
import Join from './components/join/Join'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div className='App'>
      <Hero/>
      <Program/>
      <Reasons/>
      <Plans/>
      <Review/>
      <Join/>
      <Footer/>
    </div>
  )
}

export default App


  