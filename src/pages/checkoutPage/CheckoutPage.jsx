import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cartSelector";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeBtn from "../../components/stripe-btn/StripeBtn";

import "./checkout.scss";

const CheckoutPage = ({ cartItems, totalPrice }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product Img</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Qty</span>
        </div>
        <div className="header-block">
          <span>Unit Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>Total: ${totalPrice}</span>
      </div>
      <hr />
      <div className="test-warning">
        *Please use this test credit card for payment*
        <br />
        5555 5555 5555 4444 - <strong>Exp:</strong> <em>Any future date</em> -{" "}
        <strong>CVV:</strong> <em>Any 3 digits</em>
      </div>
      <StripeBtn price={totalPrice} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
