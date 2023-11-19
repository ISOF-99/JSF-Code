import React from 'react'
import  image1 from '../assets/images/kvinnas.svg'
import  image2 from '../assets/images/Man1.svg'
import  image3 from '../assets/images/K1.svg'
import  image4 from '../assets/images/M2.svg'
import  image5 from '../assets/images/cImage.svg'
import  image6 from '../assets/images/iImage.svg'
import  image7 from '../assets/images/jImage.svg'
const Team = () => {
  return (
<div>
 <section className="team-members">



<div className="team">
    <div className="team-top">
        <div className="team-top-left">
            <p>Meet Our Team</p>
            <h2>Experienced Team Members</h2>
        </div>
        <div className="team-top-right">
            <a href="#">Browse Team<i className="fa-solid fa-arrow-right"></i></a>
        </div>
    </div>
    <div className="team-bottom">
        <div className="members">
            <div className="member">
            <img src={image1} alt=""/>
                <h4>Kristine Palmer</h4>
                <p>Cheif Operation Officer</p>
            </div>
            <div className="member">
            <img src={image2} alt=""/>
                <h4>Mark Aubri</h4>
                <p>Senior Consultant</p>
            </div>
            <div className="member">
            <img src={image3} alt=""/>
                <h4>Kimberly Hansen</h4>
                <p>Senior Consultant</p>
            </div>
            <div className="member">
            <img src={image4} alt=""/>
                <h4>Justin Willioman</h4>
                <p>Senior Tech Consultant</p>
            </div>
        </div>
         <span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </span>

        <div className="testimonials">
                <p>Testmonial</p>
                <h2>What Our Client Says</h2>
                <div className="wrapper">
                    <div className="box">
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <p> "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos
                            velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>

                        <div className="content">
                            <div className="image">
                            <img src={image5} alt=""/>
                            </div>
                            <div className="info">
                                <h4>Cassandra Warren</h4>
                                <p>Buisness Manager,Derfous</p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <p> "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos
                            velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>

                        <div className="content">
                            <div className="image">
                            <img src={image6} alt=""/>
                            </div>
                            <div className="info">
                                <h4>Amanda Tulling</h4>
                                <p>Senior Developer, Square</p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <p> "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos
                            velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        <div className="content">
                            <div className="image">
                            <img src={image7} alt=""/>
                            </div>
                            <div className="info">
                                <h4>Jack McDogglas</h4>
                                <p>Key Acoount Manager,Gobona</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="link" href="#">All Reviews<i className="fa-solid fa-arrow-right"></i></a>
            </div>
          
    </div>
</div>

</section>

    </div>
  )
}

export default Team