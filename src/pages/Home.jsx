import React from 'react'
import Hero from '../components/Hero'
import LetestCollection from '../components/LetestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero />
      <LetestCollection />
      <BestSeller />
      <OurPolicy />
      <Newsletter />
    </div>
  )
}

export default Home