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
      <img src={icon} />
      <h1>{name}</h1>
      <h3>{heading}</h3>
    </div>
  );
};

export default Tile;
