import React from 'react';
import { villas } from "../../villas";
import { useParams } from 'react-router-dom';

const SingleVilla = () => {
    const { id } = useParams();
    const numericId = Number(id);
    const filterVilla = villas.filter((villa) => villa.id === numericId)[0];

    return (
        <>
            <section id="singleVilla" className="pge">
                <div className="container">
                    <h3>{filterVilla.name}</h3>
                    <div className="images">
                        <div className="villaImg">
                            <img src={filterVilla.image} alt={filterVilla.name} />
                        </div>
                        <div className="otherImgs">
                            <div>
                                <img src="/landing.jpg" alt="landing" />
                                <img src="/people.jpg" alt="people" />
                            </div>
                            <div>
                                <img src="/people2.jpg" alt="people2" />
                                <img src="/villa10.jpg" alt="villa" />
                            </div>
                        </div>
                    </div>
                    <h4>{filterVilla.location}</h4>
                    <p>
                        {filterVilla.bathrooms} Bathrooms / {filterVilla.bedrooms} Bedrooms / {filterVilla.guests} Guests / {filterVilla.squareMeter} Area
                    </p>
                    <div className="checkin_out">
                        <h5>Check In: <span>9:00 AM </span></h5>
                        <h5>Check Out: <span>11:00 PM</span></h5>
                    </div>
                    <div className="location">
                        <h4>LOCATION</h4>
                       <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.1124102358475!2d85.81636641477874!3d20.296058086398014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7d9527c7e27%3A0x9477f29dfde70b9e!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1692430878745!5m2!1sen!2sin"
              style={{ width: "100%", height: "400px", border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleVilla;
