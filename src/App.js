import React from 'react'
import TopBar from './Components/TopBar'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Activities from './Components/Activities'
import Booking from './Components/Booking'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div>
      <TopBar/>
      <NavBar/>
      <Hero/>
      <Activities/>
      <Booking/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
