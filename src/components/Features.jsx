import React from 'react'
import  icon from '../assets/images/icon.svg'
import  Frame1 from '../assets/images/Frame 3.svg'
import  icon2 from '../assets/images/Icon (2).svg'
import  icon3 from '../assets/images/Frame 5.svg'
const Features = () => {
  return (
    <div>
      <section className="features">
            <div className="feature-left">
                <p>Features</p>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <a href="#">Learn More<i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="feature-right">
                <div className="feature-right-items">
                    <div className="feature-right-item">
                    <img src={icon} alt=""/>
                            <p className="item-heading">Business Advice</p>
                            <p className="item-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="feature-right-item">
                    <img src={Frame1} alt=""/>
                            <p className="item-heading">Startup Business</p>
                            <p className="item-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="feature-right-items">
                    <div className="feature-right-item">
                    <img src={icon2} alt=""/>
                        <p className="item-heading">Financial Advice</p>
                        <p className="item-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="feature-right-item">
                    <img src={icon3} alt=""/>
                        <p className="item-heading">Risk Management</p>
                        <p className="item-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Features