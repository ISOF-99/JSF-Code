import React from 'react'
import  image1 from '../assets/images/2Image.svg'
import  image2 from '../assets/images/1Image.svg'
import  image3 from '../assets/images/3Image.svg'

const Article = () => {
  return (
    <div>
        <section className="articles">
            <div className="article-top">
                <div className="article-top-left">
                    <p>Articles & News</p>
                    <h2>Get Every Single Article And News</h2>
                </div>
                <div className="article-top-right">
                    <a href="#">Browse Articles<i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="article-bottom">
                <div>
                    <div className="item">
                        <div className="date-img">
                        <img src={image1} alt=""/>
                              
                            <div className="date">
                                <h4>25</h4>
                                <p>Mar</p>
                            </div>
                        </div>
                        <p>Business</p>
                        <h5>How To Use The Digitalization In The Classroom</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, voluptatum.</p>
                    </div>
                    <div className="item">
                        <div className="date-img">
                        <img src={image2} alt=""/>
                            
                            <div className="date">
                                <h4>17</h4>
                                <p>Mar</p>
                            </div>
                        </div>
                        <p>Business</p>
                        <h5>How To Implement Chat GPT In Your Projects</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, voluptatum.</p>
                    </div>
                    <div className="item">
                        <div className="date-img">
                        <img src={image3} alt=""/>
                            <div className="date">
                                <h4>13</h4>
                                <p>Mar</p>
                            </div>
                        </div>
                        <p>Business</p>
                        <h5>The Guide To Support Modern CSS In Design</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, voluptatum.</p>
                    </div>
                </div>
            </div>
            <span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </span>    
        </section>

    </div>
  )
}

export default Article