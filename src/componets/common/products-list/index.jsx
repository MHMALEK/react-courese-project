import React, { useEffect, useState } from "react";
import { getMockProducts } from "../../../server";
import Loading from "../loading";

import styles from "./style.module.css";
import "../../base/button/style.css";

const ProductsList = ({ onProductSelected }) => {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDataFromApi();
  }, []);

  const getDataFromApi = async () => {
    const response = await getMockProducts();
    setProductsList(response);
    setIsLoading(false);
  };

  const addToCart = (product) => {
    onProductSelected(product);
  };

  const renderProducts = () => {
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
            <div key={index} className={styles.productItem}>
              <div className={styles.productName}>{product.name}</div>
              <div className={styles.productPrice}>{product.price}</div>
              <button
                className="button-global"
                onClick={() => addToCart(product)}
              >
                add To Cart
              </button>
            </div>
          );
        })}
      </div>
    );
  };

  return renderProducts()
};

export default ProductsList;
