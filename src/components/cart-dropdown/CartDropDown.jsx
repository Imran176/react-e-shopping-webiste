import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.scss";
import CartItem from "../cart-item/CartItem";
import CustomBtn from "../custom-btn/CustomBtn";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cartSelector";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomBtn> GO TO CHECKOUT</CustomBtn>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropDown);
