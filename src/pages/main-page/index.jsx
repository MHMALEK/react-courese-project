import React, { useState } from "react";
import Header from "../../componets/layout/header";
import NavBar from "../../componets/common/nav-bar";
import ProductsList from "../../componets/common/products-list";
import Cart from "../../componets/common/cart";

import styles from "./style.module.css";

const navBarItem = {
  HOME: "home",
  CART: "cart",
  PROFILE: "profile",
};

const MainPage = () => {
  const [showCart, setShowCart] = useState(false);
  const [addedToCartList, setAddedToCartList] = useState([]);

  const handleOnProductSelected = (productItem) => {
    setAddedToCartList((addedToCartListPrevState) => {
      if (!addedToCartListPrevState.includes(productItem)) {
        return [...addedToCartListPrevState, productItem];
      }
      return [...addedToCartListPrevState];
    });
  };
  const handleRemoveProductFromCart = (productItem) => {
    const newList = addedToCartList.filter((product) => {
      return product.id !== productItem.id;
    });
    setAddedToCartList(newList);
  };

  const handleOnHomeClick = () => {
    // handle click on home
  };

  const handleOnCartClick = () => {
    // handle click on cart
    setShowCart((prevState) => !prevState);
  };

  const handleOnProfileClick = () => {
    // handle click on profile
  };

  const handleOnNavItemClick = (itemName) => {
    if (itemName === navBarItem.HOME) {
      handleOnHomeClick();
    }
    if (itemName === navBarItem.CART) {
      handleOnCartClick();
    }
    if (itemName === navBarItem.PROFILE) {
      handleOnProfileClick();
    }
  };

  return (
    <div className="main-layout">
      <Header>
        <NavBar
          onItemClick={(itemName) => handleOnNavItemClick(itemName)}
          cartItemsNumber={addedToCartList.length}
        />
      </Header>
      <Cart
        list={addedToCartList}
        onItemRemove={handleRemoveProductFromCart}
        show={showCart}
      />
      <div className={styles.container}>
        <ProductsList onProductSelected={handleOnProductSelected} />
      </div>
    </div>
  );
};

export default MainPage;
