import React from "react";
import Tile from "../components/Tile";
import Navbar from "../components/Navbar";
import styles from "./Homepage.module.css";
import icon from "../assets/car.png";
import FeedBack from "../components/FeedBacks";

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
      <div className={styles.tile_container}>
        <Tile
          path="/drivingInstructor"
          icon={icon}
          name="Driving Instructor"
          heading="Driving"
        />
        <Tile
          path="/packageInformation"
          icon={icon}
          name="Package Information"
          heading="Driving"
        />
        <Tile
          path="/drivingInstructor"
          icon={icon}
          name="Driving Instructor"
          heading="Driving"
        />
      </div>
      <FeedBack/>
    </div>
  );
};

export default Homepage;
