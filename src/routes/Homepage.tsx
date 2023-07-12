import React from "react";
import Tile from "../components/Tile";
import Navbar from "../components/Navbar";
import styles from "./Homepage.module.css";
import icon from "../assets/car.png";

const Homepage = () => {
  return (
    <div className={styles.hompage_container}>
      <Navbar />
      <div className={styles.content_container}>
        <p>
          Discover <span>Madad</span>, Your Trusted Companion for a Successful
          Start in Canada
        </p>
      </div>
      <div className={styles.button_container}>
        <button>Discover</button>
      </div>
      <div>
        <Tile icon={icon} name="Driving Instruction" heading="Driving" />
      </div>
    </div>
  );
};

export default Homepage;
