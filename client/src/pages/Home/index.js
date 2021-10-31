import React from 'react'

//components
import Navbar from '../../components/Navbar'
import CategorySection from '../../components/CategorySection'
import SliderSection from '../../components/SliderSection'
import ProductsSection from '../../components/ProductsSection'
import NewsLetterSection from '../../components/NewsLetterSection'
import FooterSection from '../../components/FooterSection'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <SliderSection/>
      <CategorySection/>
      <ProductsSection/>
      <NewsLetterSection/>
      <FooterSection/>
    </div>
  )
}

export default Home
