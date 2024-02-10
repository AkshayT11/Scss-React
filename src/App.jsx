import { useState } from 'react'
import Navbar from  "./Components/Navbar/Navbar"
import Hero from './Components/Hero/Hero'
import Companies from './Components/Companies/Companies'
import Pricing from './Components/Pricing/Pricing'
import Earning from './Components/Earnings/Earning'
import Footer from './Components/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Hero/> 
      <Companies/>
      <Pricing/>
      <Earning/>
      <Footer/>
    </div>
  )
}

export default App
