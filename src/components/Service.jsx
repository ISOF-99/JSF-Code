import React from 'react'
import  white from '../assets/images/background-lines-right.svg'

const Service = () => {
  return (
    <div>
         <section className="our-services">
            <div>
                <p>Our Services</p>
                <h2>We Provide The Best <br /> Service For Consulting</h2>
                <div>
                    <div className="text">
                        <div className="thin-line"></div>
                        <h4>Business Advice</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>

                        <span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                    <div className="text">
                        <div className="thin-line"></div>
                        <h4>Startup Business</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                    <div className="text">
                        <div className="thin-line"></div>
                        <h4>Financial Advice</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                    <div className="text">
                        <div className="thin-line"></div>
                        <h4>Risk Management</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                </div>
                <a href="#">Browse Services<i className="fa-solid fa-arrow-right"></i></a>
            </div>
             <img className='white'  src={white} alt=""/>
        </section>
    </div>
  )
}

export default Service