import React, { useEffect } from 'react'
import "./Pricing.scss"
import Aos from 'aos'
import "aos/dist/aos.css"
import { pricingInfo } from '../../Data'
import "./Pricing.scss"

const Pricing = () => { 
    useEffect(()=>{
        Aos.init({duration: 1000});
    })

  return (
    <section className="pricing">
        <h2 data-aos="fade-up">Best crypto currency</h2>
        <div className="pricing_container wrapper">
            {pricingInfo.map(({image,name,price})=> (
                <div className="pricing_card" data-aos="fade-up">
                    <img src={image} alt={name} />
                    <h3>{name}</h3>
                    <span>{price} </span>
                    <a href="#" className="btn">Buy it Now</a>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Pricing