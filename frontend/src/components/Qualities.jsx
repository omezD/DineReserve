import React from 'react'
import {data} from '../restApi.json'
import fresh from "../assets/qualities/fresh.jpg";
import quality from "../assets/qualities/quality.jpg";
import delivery from "../assets/qualities/delivery.jpg";
import chef from "../assets/qualities/chef.jpg";

const imageMap = {
  fresh,
  quality,
  delivery,
  chef
};
const Qualities = () => {
  return (
    <>
        <section className='qualities' id='qualities'>
          <div className="container">
            {
              data[0].ourQualities.map(element=>{
                return(
                  <div className='card' key={element.id}>
                      <img src={imageMap[element.image]} alt={element.title} />
                      <p className='title'>{element.title}</p>
                      <p className='description'>{element.description}</p>
                  </div>
                )
              })
            }
          </div>
        </section>
    </>
  )
}

export default Qualities