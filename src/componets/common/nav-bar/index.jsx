import React from "react";
import NavBarItem from "../nav-bar-item";

import "./style.css";

const navBarItem = {
  HOME: "home",
  CART: "cart",
  PROFILE: "profile",
};

const NavBar = (props) => {
  const handleOnHomeClick = () => {
    // handle click on home
  };

  const handleOnCartClick = (itemName) => {
    // handle click on cart
    const { onItemClick } = props;
    onItemClick(itemName);
  };

  const handleOnProfileClick = () => {
    // handle click on profile
  };

  const handleOnNavBarItemClick = (itemName) => {
    if (itemName === navBarItem.HOME) {
      handleOnHomeClick();
    }
    if (itemName === navBarItem.CART) {
      handleOnCartClick(itemName);
    }
    if (itemName === navBarItem.PROFILE) {
      handleOnProfileClick();
    }
  };

  const { cartItemsNumber } = props;
  return (
    <div className="nav-bar">
      <NavBarItem onClick={() => handleOnNavBarItemClick(navBarItem.HOME)}>
        Home
      </NavBarItem>
      <NavBarItem onClick={() => handleOnNavBarItemClick(navBarItem.CART)}>
        Cart ( {cartItemsNumber} )
      </NavBarItem>
      <NavBarItem onClick={() => handleOnNavBarItemClick(navBarItem.PROFILE)}>
        Profile
      </NavBarItem>
    </div>
  );
};
export default NavBar;
