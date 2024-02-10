import React, { useEffect } from 'react'
import { companyInfo } from '../../Data';
import Aos from 'aos';
import "aos/dist/aos.css"
import "./Companies.scss"

const Companies = () => {
    useEffect(()=> {
        Aos.init({duration:1000})
    })

  return (
    <div className='companies'>
        <div className="companies_container wrapper" data-aos = "fade-up" >
            {companyInfo.map(({id,img})=> (
                <img src={img} alt="company" key={id} />
            ) )}
        </div>
    </div> 
  )
}

export default Companies