import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.scss";
import CartItem from "../cart-item/CartItem";
import CustomBtn from "../custom-btn/CustomBtn";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cartSelector";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cartActions";

const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-msg">Your cart is Empty</span>
        )}
      </div>
      <CustomBtn
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        {" "}
        GO TO CHECKOUT
      </CustomBtn>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
