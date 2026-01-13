import React from "react";
import Navbar from "./Navbar";
import heroImg from "../assets/hero2.avif";
import logo from "../assets/logo.png";

const HeroSection = () => {
  return (
    <section className="heroPro">
      <Navbar />

      {/* decorative blobs */}
      <div className="blob blob-orange"></div>
      <div className="blob blob-pink"></div>

      <div className="heroPro-container">
        {/* LEFT */}
        <div className="heroPro-left">
          <img src={logo} alt="logo" className="heroPro-logo" />

          <h1>
            Book the <span>Best Tables</span><br />
            Before Anyone Else
          </h1>

          <p>
            Discover trending restaurants, reserve instantly,
            and enjoy dining without waiting in queues.
          </p>

          <div className="heroPro-search">
            <input type="text" placeholder="Search restaurant or city" />
            <button>Reserve</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="heroPro-right">
          <div className="image-glass">
            <img src={heroImg} alt="restaurant" />
          </div>

          <div className="floating-card">
            ⭐ 4.8 Rated by 10k+ food lovers
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
