import React from "react";
import styles from "./style.module.css";

const NavBarItem = ({ children, onClick }) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div onClick={handleClick} className={styles.navBarItem}>
      {children}
    </div>
  );
};

export default NavBarItem;
