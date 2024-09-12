import React from 'react'
import About from '../../subcomponents/About'


const AboutUs = () => {
  return (
    <>
    <section id="aboutPage" className="page">
        <div className="container">
            <img src="/about.jpg" alt="about" />
            <div className="content">
                <h3>Your peace of mind, our priority!</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est deserunt ex sequi incidunt architecto corporis!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta debitis tempore nobis. In nam blanditiis fuga dolores distinctio eius.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsum cumque, cupiditate a animi esse?</p>
            </div>
        </div>
        <About/>
    </section>
      
    </>
  )
}

export default AboutUs
