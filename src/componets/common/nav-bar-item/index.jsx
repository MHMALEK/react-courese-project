import React, { Component } from "react";
import styles from "./style.module.css";

class NavBarItem extends Component {
  handleClick = () => {
    const { onClick } = this.props;
    onClick && onClick();
  };
  render() {
    return (
      <div onClick={this.handleClick} className={styles.navBarItem}>
        {this.props.children}
      </div>
    );
  }
}

export default NavBarItem;
