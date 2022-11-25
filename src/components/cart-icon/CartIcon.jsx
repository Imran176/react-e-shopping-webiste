import React from "react";
import {ReactComponent as ShoppingCartIcon} from "../../assets/cart.svg";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";

import "./cart-icon.scss";

const CartIcon = ({toggleCartHidden, cartItems}) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count"> {cartItems.length} </span>
    </div>
  );
};

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
