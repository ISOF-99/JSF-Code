import React from 'react'
import  showcase from '../assets/images/showcase-image.svg'
import  paperz from '../assets/images/paperz.svg'
import  dorfus from '../assets/images/dorfus.svg'
import  martino from '../assets/images/martino.svg'
import  square from '../assets/images/square.svg'
import  gobona from '../assets/images/gobona.svg'
import  logo from '../assets/images/WL.svg'




const ShowCase = () => {
  return (
    <div>

<div>
         <section className="showcase">
            <div className="container">
                <div className="content">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <a className="btn-yellow" href="consulting.html">Get Consulting<i
                            className="fa-solid fa-arrow-right"></i></a>
                    <a className="btn-transparent" href="services.html">Learn More<i
                            className="fa-solid fa-arrow-right"></i></a>
                   <img className='Line2'  src={logo} alt=""/>
                </div>
                <img src={showcase} alt=""/>
            </div>
        </section>
        <div className="logo-rawer">
            <div className="-logo">
                <img src={paperz} alt=""/>
                <img src={dorfus} alt=""/>
                <img src={martino} alt=""/>
                <img src={square} alt=""/>
                <img src={gobona} alt=""/>
            </div>
        </div>
    </div>

    </div>
  )
}

export default ShowCase