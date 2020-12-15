import React from "react";
import Header from "../../componets/layout/header";
import NavBar from "../../componets/common/nav-bar";
import Footer from "../../componets/layout/footer";
import ProductsList from "../../componets/common/products-list";
import Cart from "../../componets/common/cart";

import styles from "./style.module.css";

const navBarItem = {
  HOME: "home",
  CART: "cart",
  PROFILE: "profile",
};

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnProductSelected = this.handleOnProductSelected.bind(this);

    this.state = {
      addedToCartList: [],
      showCart: false,
    };
  }
  handleOnProductSelected(productItem) {
    this.setState(
      (prevState) => {
        if (!prevState.addedToCartList.includes(productItem)) {
          return {
            addedToCartList: [...prevState.addedToCartList, productItem],
          };
        }
        return {
          ...prevState,
        };
      },
      () => {
        console.log(this.state);
      }
    );
  }
  handleRemoveProductFromCart = (productItem) => {
    const newList = this.state.addedToCartList.filter((product) => {
      return product.id !== productItem.id;
    });
    this.setState({
      addedToCartList: newList,
    });
  };

  handleOnHomeClick = () => {
    // handle click on home
  };

  handleOnCartClick = () => {
    // handle click on cart
    this.setState(
      (prevState) => {
        return {
          showCart: !prevState.showCart,
        };
      },
      () => console.log(this.state.showCart)
    );
  };

  handleOnProfileClick = () => {
    // handle click on profile
  };

  handleOnNavItemClick = (itemName) => {
    if (itemName === navBarItem.HOME) {
      this.handleOnHomeClick();
    }
    if (itemName === navBarItem.CART) {
      this.handleOnCartClick();
    }
    if (itemName === navBarItem.PROFILE) {
      this.handleOnProfileClick();
    }
  };

  render() {
    const { showCart, addedToCartList } = this.state;
    return (
      <div className="main-layout">
        <Header>
          <NavBar
            onItemClick={(itemName) => this.handleOnNavItemClick(itemName)}
            cartItemsNumber={addedToCartList.length}
          />
        </Header>
        <Cart
          list={addedToCartList}
          onItemRemove={this.handleRemoveProductFromCart}
          show={showCart}
        />
        <div className={styles.container}>
          <ProductsList onProductSelected={this.handleOnProductSelected} />
        </div>
      </div>
    );
  }
}

export default MainPage;
