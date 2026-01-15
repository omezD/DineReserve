import React from "react";
import { data } from "../restApi.json";
import model3 from "../assets/testimonials/model3.jpg";

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">Customer Testimonials</h1>
          <p>
            Hear what our happy customers have to say about our food and
            service.
          </p>
        </div>

        <div className="testimonial_container">
          {data[0].testimonials.map((item) => (
            <div className="testimonial_card" key={item.id}>
              <div className="profile">
                <h4>{item.userName}</h4>
                <img src={model3} alt={item.name} />
              </div>

              <div className="info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.descriptionion}</span>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
