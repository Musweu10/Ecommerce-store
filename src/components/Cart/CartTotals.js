import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";

export default function CartTotals({ value, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger clearcart text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear Cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal : </span>
              <strong>K {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">Tax : </span>
              <strong>K {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total : </span>
              <strong>K {cartTotal}</strong>
            </h5>
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            />
            <div className="py-5"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
