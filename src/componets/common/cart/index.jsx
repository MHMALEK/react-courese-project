import React from "react";
import "./style.css";

const Cart = (props) => {
  const removeFromCart = (productItem) => {
    props.onItemRemove && props.onItemRemove(productItem);
  };
  const { show } = props;
  if (show) {
    return (
      show && (
        <div className="cart-container">
          {props.list.map((productItem, index) => (
            <div key={index} className="product-in-cart">
              <p>{productItem.name}</p>
              <p>{productItem.price}</p>
              {productItem.hasOff && <p>Sale</p>}
              <button onClick={() => removeFromCart(productItem)}>
                Remove From Cart
              </button>
            </div>
          ))}
        </div>
      )
    );
  }
  return null;
};

export default Cart;
