import React, { Component } from "react";
import { getMockProducts } from "../../../server";
import Loading from "../loading";

import styles from "./style.module.css";
import "../../base/button/style.css";
import { Link } from "react-router-dom";

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: [],
      isLoading: true,
    };
    this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount() {
    this.getDataFromApi();
  }
  async getDataFromApi() {
    const response = await getMockProducts();
    // const hasOffProducts = response.filter((product) => product.hasOff);
    this.setState({
      productsList: response,
      isLoading: false,
    });
  }

  addToCart(product) {
    this.props.onProductSelected(product);
  }
  renderProducts = () => {
    const { productsList, isLoading } = this.state;
    if (isLoading) {
      return (
        <div className={styles.loadingWrapper}>
          <Loading />
        </div>
      );
    }
    return (
      <div className={styles.listWrapper}>
        {productsList.map((product, index) => {
          return (
            <Link to={`/product/${product.id}`}>
              <div key={index} className={styles.productItem}>
                <div className={styles.productName}>{product.name}</div>
                <div className={styles.productPrice}>{product.price}</div>
                <button
                  className="button-global"
                  onClick={() => this.addToCart(product)}
                >
                  {" "}
                  add To Cart
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    );
  };
  render() {
    return <>{this.renderProducts()}</>;
  }
}

export default ProductsList;
