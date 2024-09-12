import React from 'react'
import { RiFacebookBoxLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
    <>
      <section id="contact_Mini">
        <div className="super_container">
          <div className="container">
            <h3>Let's Contact</h3>
            <div>
              <p>Phone</p>
              <span>+91 9876458734</span>
            </div>
            <div>
              <p>Email</p>
              <span>zk@gmail.com</span>
            </div>
            <div>
              <p>Addres</p>
              <span>House no.123 Sector A-1</span>
            </div>
            <ul>
              <Link to={'/'} target='_blank'><RiFacebookBoxLine /></Link>
              <Link to={'/'} target='_blank'><RiFacebookBoxLine /></Link>
              <Link to={'/'} target='_blank'><RiFacebookBoxLine /></Link>
            </ul>
          </div>
          <div className="container_2">
            <h3>We'd ; pvp tp hear from you</h3>
            <form >
              <div>
                <input type="text" placeholder='Your Name' />
                <input type="email" placeholder='Email' />
              </div>
              <textarea rows="4" placeholder='Your Message....'></textarea>
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>

      </section>
    </>
  )
}

export default Contact
