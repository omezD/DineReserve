import React from "react";
import { data } from "../restApi.json";
import lamb from "../assets/dishes/lamb.jpg";
import salmon from "../assets/dishes/salmon.jpg";
import seabass from "../assets/dishes/seabass.jpg";
import burger from "../assets/dishes/burger.jpg";
import fish from "../assets/dishes/fish.jpg";
import soup from "../assets/dishes/soup.jpg";
import spaghetti from "../assets/dishes/spaghetti.jpg";
import strawberry from "../assets/dishes/strawberry.jpg";
const imageMap = {
  lamb,
  salmon,
  seabass,
  burger,
  fish,
  strawberry,
  spaghetti,
  soup,
};
const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">POPULAR DISHES</h1>
            <p>A celebration of taste, crafted for true food lovers. !</p>
          </div>
          <div className="dishes_container">
            {data[0].dishes.map((element) => (
              <div className="card" key={element.id}>
                <img src={imageMap[element.image]  || imageMap.lamb} alt={element.title} loading="lazy" />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
