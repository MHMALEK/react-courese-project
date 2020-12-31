import React from "react";
import { getProdutById } from "../../server";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true,
    };
  }
  componentDidMount() {
    this.getProductData();
  }
  getProductData = async () => {
    const { routeProps } = this.props;
    const { match } = routeProps;
    const { params } = match;
    try {
      const data = await getProdutById(Number(params.name));
      this.setState({
        data,
      });
    } catch (e) {
      alert("product not found");
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };
  render() {
    const { isLoading, data } = this.state;
    return (
      <div className="product-wrapper">
        {isLoading && <div> loading </div>}
        <div>product</div>
        <p>{data && data.id}</p>
        <p>{data && data.name}</p>
        <p>{data && data.price}</p>
        {data && data.price && <p>Sale!</p>}
      </div>
    );
  }
}

export default ProductPage;
