import React from 'react'
import  Gimage from '../assets/images/GImage.svg'
import  Wimage from '../assets/images/WImage.svg'
import  image3 from '../assets/images/13image.svg'
import  image4 from '../assets/images/12image.svg'

const Project = () => {
  return (
    <div>
         <section className="projects">

<p>Project & Case Studies</p>
<h2>Let's Looks Our Global Project</h2>

<div className="image">
    <div>
        <img src={Gimage} alt=""/> 
        <p>Grow Your Buisness</p>
        <a href="#">Read More <i className="fa-solid fa-arrow-right"></i></a> 
    </div>

    <div>
        <img src={Wimage} alt=""/> 
        <p>Why your client needs a responsive website</p>
        <a href="#">Read More  <i className="fa-solid fa-arrow-right"></i></a>
    </div>
</div>

<div className="image">
    <div>
       <img src={image3} alt=""/> 
        <p>Educate your employees to get better results</p>
        
        <a href="#">Read More
            <i className="fa-solid fa-arrow-right"></i>
        </a>
    </div>

    <div>
    <img src={image4} alt=""/> 
        <p>Business Insights is a important piece of your business</p>
       
        <a href="#">Read More
            <i className="fa-solid fa-arrow-right"></i>
        </a>
    </div>
</div>
<a className="link" href="#">All Recent Projects<i className="fa-solid fa-arrow-right"></i></a>

</section>
    </div>
  )
}

export default Project  