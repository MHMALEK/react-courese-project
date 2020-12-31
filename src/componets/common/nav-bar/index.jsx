import React from "react";
import { Link } from "react-router-dom";
import NavBarItem from "../nav-bar-item";

import "./style.css";

const navBarItem = {
  HOME: "home",
  CART: "cart",
  PROFILE: "profile",
};

class NavBar extends React.Component {
  handleOnHomeClick = () => {
    // handle click on home
  };

  handleOnCartClick = (itemName) => {
    // handle click on cart
    const { onItemClick } = this.props;
    onItemClick(itemName);
  };

  handleOnProfileClick = () => {
    // handle click on profile
  };

  handleOnNavBarItemClick = (itemName) => {
    if (itemName === navBarItem.HOME) {
      this.handleOnHomeClick();
    }
    if (itemName === navBarItem.CART) {
      this.handleOnCartClick(itemName);
    }
    if (itemName === navBarItem.PROFILE) {
      this.handleOnProfileClick();
    }
  };

  render() {
    const { cartItemsNumber } = this.props;
    return (
      <div className="nav-bar">
        <Link to="/">
          <NavBarItem
            onClick={() => this.handleOnNavBarItemClick(navBarItem.HOME)}
          >
            Home
          </NavBarItem>
        </Link>
        <NavBarItem
          onClick={() => this.handleOnNavBarItemClick(navBarItem.CART)}
        >
          Cart ( {cartItemsNumber} )
        </NavBarItem>
        <Link to="/profile">
          <NavBarItem
            onClick={() => this.handleOnNavBarItemClick(navBarItem.PROFILE)}
          >
            Profile
          </NavBarItem>
        </Link>
      </div>
    );
  }
}
export default NavBar;
