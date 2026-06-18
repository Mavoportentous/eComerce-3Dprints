import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import DroneCategories from './components/DroneCategories'
import FeaturedProducts from './components/FeaturedProducts'
import Features from './components/Features'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  const [cartCount, setCartCount] = useState(0)

  const handleAddToCart = () => {
    setCartCount(cartCount + 1)
  }

  return (
    <div className="app">
      <Header cartCount={cartCount} />
      <main>
        <Hero />
        <DroneCategories />
        <FeaturedProducts onAddToCart={handleAddToCart} />
        <Features />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
