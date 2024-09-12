
const Regions = () => {
  return (
    <>
      <section id='regions'>
       <h1>
        OUR REGIONS
       </h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iure dignissimos aspernatur nulla rem facilis?</p>
        <div className="region_container">
       
            <div className="card">
                <img src="/region1.jpg" alt="mountains" />
                <h2>Mountains</h2>
                <p><span>90</span>Properties</p>
            </div>
            <div className="card">
                <img src="/region2.jpg" alt="mountains" />
                <h2>CoastLine</h2>
                <p><span>52</span>Properties</p>
            </div>
            </div>
      </section>
    </>
  )
}

export default Regions
