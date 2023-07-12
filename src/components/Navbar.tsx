import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const language: string[] = ["EN", "ਪੰਜ"];

  const handleLangChange = () => {};

  return (
    <>
      <div className={styles.navbar_container}>
        <div className={styles.heading_container}>
          <div className={styles.before_line}></div>
          <div>
            <h1>Madad</h1>
          </div>
          <div className={styles.after_line}></div>
        </div>
        <div className={styles.lang_dropdown}>
          <select onChange={handleLangChange}>
            {language.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default Navbar;
