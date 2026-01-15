import React from 'react';
import { data } from '../restApi.json';

import chef from "../assets/who/chef.jpg";
import food from "../assets/who/food.jpg";
import resturent from "../assets/who/resturent.jpg";
import fourth from "../assets/who/fourth.jpg";

const images = [chef, food, resturent, fourth];

const WhoAreWe = () => {
  return (
    <section className="who_are_we" id="who_are_we">
      <div className="container">

        <div className="who_header">
          <h1 className="heading">Who We Are</h1>
          <p>
            Passionate about food, dedicated to quality, and driven by the joy
            of serving unforgettable dining experiences.
          </p>
        </div>

        <div className="who_grid">
          {data[0].who_we_are.map((element, index) => (
            <div className="who_card" key={element.id}>
              <div className="who_image">
                <img src={images[index]} alt={element.title} />
              </div>
              <h2>{element.number}</h2>
              <p>{element.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhoAreWe;
