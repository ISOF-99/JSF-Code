import React from 'react'

const Testimonials = () => {
  return (
    <div>
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
                    <img src="images/cImage.svg" alt=""/>
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
                    <img src="images/iImage.svg" alt=""/>
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
                    <img src="images/jImage.svg" alt=""/>
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
  )
}

export default Testimonials