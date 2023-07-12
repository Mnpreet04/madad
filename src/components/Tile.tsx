import React from "react";
import styles from "./Tile.module.css";

interface TileProps {
  icon: string;
  name: string;
  heading: string;
}

const Tile = ({ icon, name, heading }: TileProps) => {
  return (
    <div className={styles.tile}>
      <div className={styles.picture}><img src={icon} /></div>
      <div className={styles.heading}><h1>{name}</h1></div>
      <div className={styles.subheading}><h3>{heading}</h3></div>
    </div>
  );
};

export default Tile;
