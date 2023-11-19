import React from 'react'
import image  from '../assets/images/background-wavy-lines.svg'

const Update = () => {
  return (
    <div>
         <section className="updates">
            <div>
                <h2>Get News Updates By Signup</h2>
                <div>
                    <input type="text" placeholder="username@domain.com"/>
                    <a href="#">Subscribe<i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <img src={image} alt=""/>
        </section>
    </div>
  )
}

export default Update