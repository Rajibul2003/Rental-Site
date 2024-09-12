import React from 'react'
import {Link,useLocation} from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer 
       className={
        isHomePage ? "homePage_footer otherPage_footer" : "otherPage_footer"
       }
    >
      <div className="container">
        <h4>LUXURY RENTALS</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatum earum nostrum ratione magnam ipsa?</p>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/termsandcondition'}>Terms and Conditions</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="container">
        <h4>Connect with us</h4>
        <p>+91 8923546723</p>
        <p>rental@gmail.com</p>
        <p>All rights reserved rental plateform</p>
      </div>
    </footer>
    </>
  )
}

export default Footer
