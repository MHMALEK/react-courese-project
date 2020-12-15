import React from "react";
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
        <NavBarItem
          onClick={() => this.handleOnNavBarItemClick(navBarItem.HOME)}
        >
          Home
        </NavBarItem>
        <NavBarItem
          onClick={() => this.handleOnNavBarItemClick(navBarItem.CART)}
        >
          Cart ( {cartItemsNumber} )
        </NavBarItem>
        <NavBarItem
          onClick={() => this.handleOnNavBarItemClick(navBarItem.PROFILE)}
        >
          Profile
        </NavBarItem>
      </div>
    );
  }
}
export default NavBar;
