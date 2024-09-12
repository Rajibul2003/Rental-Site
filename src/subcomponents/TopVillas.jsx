import React from 'react'
import {villas} from '../villas';
import {Link} from 'react-router-dom'
import {RxDot} from 'react-icons/rx'
import { IoIosPeople } from 'react-icons/io';
import { FaBed,FaBath } from 'react-icons/fa';
import { BiArea } from 'react-icons/bi';


const TopVillas = () => {
  return (
    <>
      <section id="topVillas">
        <h1>TOP PICK VILLAS</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis fuga, eligendi vero minus praesentium molestias mollitia voluptates architecto neque aliquam dignissimos.</p>
        <div className="villasContainer">
        {villas.slice(0,3).map((element) =>{
            return(
                <Link className='card' to ={`/villas/${element.id}`} key={element.id} >
                  <img src={element.image} alt={element.name}/>
                  <div className="location_text">
                    <span>{element.location}</span>
                    <span><RxDot/></span>
                    <span>{element.category}</span>
                  </div>
                  <div className="title_text">
                    {element.name}
                  </div>
                  <div className="specifications">
                    <div className="spec">
                      <IoIosPeople/>
                      <span>{element.guests}</span>
                      Guests
                    </div>
                    <div className="spec">
                      <FaBed/>
                      <span>{element.bedrooms}</span>
                      Bedrooms
                    </div>
                    <div className="spec">
                      <BiArea/>
                      <span>{element.squareMeter}</span>
                     Area
                    </div>
                    <div className="spec">
                      <FaBath/>
                      <span>{element.bathrooms}</span>
                     Bathrooms
                    </div>
                  </div>
                </Link>

            )
        })}
        </div>
      </section>
    </>
  )
}

export default TopVillas
