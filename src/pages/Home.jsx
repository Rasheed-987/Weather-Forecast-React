import React from 'react'
import Navbar from '../components/Navbar'
import Background from '../components/Background'
import Forecast from '../components/Forecast'
import Live from '../components/Live'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Background/>
      <Forecast/>
      <Live/>
      <Footer/>
    </div>
  )
}
export default Home
