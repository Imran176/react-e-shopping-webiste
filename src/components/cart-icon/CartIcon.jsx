import React from "react";
import { ReactComponent as ShoppingCartIcon } from "../../assets/cart.svg";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";

import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";

import "./cart-icon.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count"> {itemCount} </span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
