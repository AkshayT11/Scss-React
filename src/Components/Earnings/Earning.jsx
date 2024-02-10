import React, { useEffect } from 'react'
import "./Earning.scss";
import Paisa from "../../assets/earnings.png"
import Aos from 'aos';
import "aos/dist/aos.css"

const Earning = () => {

    useEffect(()=> {
        Aos.init({duration:1000})
    })

  return (
    <section className="earnings">
        <div className="earnings_container wrapper">
            <div className="earnings_left" data-aos="fade-right">
                <img src={Paisa} alt="earning" />
            </div>

            <div className="earnings_right" data-aos="zoom-in-up">
                <h2>Track your Stocks made it Easy</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cumque voluptatem quod eum quae ea officia aliquam iste, cupiditate nostrum.</p>
                <a href="#" className='btn'>Get Started</a>
            </div>

        </div>
    </section>
  )
}

export default Earning