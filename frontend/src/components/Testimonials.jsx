import React from "react";
import { data } from "../restApi.json";

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
          {data[0].team.map((item) => (
            <div className="testimonial_card" key={item.id}>
              <div className="profile">
                <img src={item.image} alt={item.name} />
              </div>

              <p className="review">
                “Amazing food and great service. The ambience was perfect and
                the staff was extremely friendly.”
              </p>

              <div className="info">
                <h3>{item.name}</h3>
                <span>{item.designation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
