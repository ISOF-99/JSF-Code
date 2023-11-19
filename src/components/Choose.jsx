import React from 'react'
import  icon1 from '../assets/images/Group 1000004862.svg'
import  icon2 from '../assets/images/Group 1000004871.svg'
import  icon3 from '../assets/images/Group 1000004870.svg'
import  icon4 from '../assets/images/Group 1000004869.svg'
import  pic from '../assets/images/Image..svg'

const Choose = () => {
  return (
    <div>
         <section class="choose">
            <div class="choose-left">
                <p>Why Choose Us</p>
                <h2>Why We Are The <br />Best Business Consulting Agency</h2>
                <div class="item">
                    <span class="item-icon">
                    <img src={icon1} alt=""/>
                    </span>
                    <div>
                        <p>Process Excellence</p>
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                    </div>
                </div>
                <div class="item">
                    <span class="item-icon">
                    <img src={icon2} alt=""/>
                    </span>
                    <div>
                        <p>Strategic planning</p>
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                    </div>
                </div>
                <div class="item">
                    <span class="item-icon">
                    <img src={icon3} alt=""/>
                    </span>
                    <div>
                        <p>Experience Design</p>
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                    </div>
                </div>
                <div class="item">
                    <span class="item-icon">
                    <img src={icon4} alt=""/>
                    </span>
                    <div>
                        <p>Artificial intelligence</p>
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                    </div>
                </div>
            </div>
            <div class="choose-right">
                <div></div>
                <img src={pic} alt=""/>
            </div>
        </section>
    </div>
  )
}

export default Choose