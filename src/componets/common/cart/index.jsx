import React, { Component } from "react";
import "./style.css";

class Cart extends Component {
  removeFromCart = (productItem) => {
    this.props.onItemRemove && this.props.onItemRemove(productItem);
  };
  render() {
    const { show } = this.props;
    if (show) {
      return (
        show && (
          <div className="cart-container">
            {this.props.list.map((productItem, index) => (
              <div key={index} className="product-in-cart">
                <p>{productItem.name}</p>
                <p>{productItem.price}</p>
                {productItem.hasOff && <p>Sale</p>}
                <button onClick={() => this.removeFromCart(productItem)}>
                  Remove From Cart
                </button>
              </div>
            ))}
          </div>
        )
      );
    }
    return null;
  }
}

export default Cart;
