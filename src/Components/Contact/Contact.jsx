import React from 'react'
import { RiFacebookBoxLine } from 'react-icons/ri'
import {Link} from 'react-router-dom'


const Contact = () => {
    return (
        <>
            <section id="contact">
                <h1>CONTACT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quasi esse accusamus.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, aliquam eaque! Provident molestiae voluptate distinctio praesentium quasi natus impedit neque.</p>
                <div className="container">
                    <img src="/about.jpg" alt="about" />
                    <div className="content">
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
                </div>
            </section>
        </>
    )
}

export default Contact
