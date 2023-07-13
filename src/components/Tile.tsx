import React from "react";
import { Link } from 'react-router-dom';
import styles from "./Tile.module.css";

interface TileProps {
  icon: string;
  name: string;
  heading: string;
  path:string;
}

const Tile = ({ icon, name, heading , path }: TileProps) => {

  const handleClick = (event: { stopPropagation: () => void; }) => {
    event.stopPropagation();
    // Handle tile click event here
  };

  return (
    
    <div className={styles.tile} onClick={handleClick}>
      <Link to={path} className={styles.tile_link}>
      <img src={icon} className={styles.tile_img} />
      <h1>{name}</h1>
      <h3>{heading}</h3>
      </Link>
    </div>
    
  );
};

export default Tile;
