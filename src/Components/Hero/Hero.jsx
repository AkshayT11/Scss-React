import React, { useEffect } from 'react'
import Mob from "../../assets/Mob.png"
import "./Hero.scss"
import Aos from "aos";
import "aos/dist/aos.css"

const Hero = () => {

    useEffect(()=>{
        Aos.init({duration:1000})
    })

  return (
    <section className="hero">
        <div className="hero_container wrapper">
            <div className="hero_left" data-aos="fade-right">
                <img src={Mob} alt="hero-img" />
            </div>
            <div className="hero_right" data-aos="zoom-in-up">
                <h1>Make Easier Crypto transactions</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate possimus dolor veritatis aut distinctio? Ducimus, aliquam. Possimus sunt magnam quod itaque placeat vero hic, sint, ducimus vitae est blanditiis iste.</p>
                <a href="#" className="btn">Try For Free</a>
            </div>
        </div>
    </section>
  )
}

export default Hero