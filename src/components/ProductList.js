import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

class ProductList extends Component {
  // state = {
  //   products: storeProducts,
  // };
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Welcome" title="To Estore" />
            {/* Product Row */}
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  // console.log(value);
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
                {/* {(value) => {
                  return <h1>{value}</h1>;
                }} */}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>

      //    <Product/>
    );
  }
}

export default ProductList;
