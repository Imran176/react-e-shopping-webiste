import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/RoyalClothing.svg";

import CartIcon from "../cart-icon/CartIcon";
import CartDropDown from "../cart-dropdown/CartDropDown";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { selectCartHidden } from "../../redux/cart/cartSelector";
import { signOutStart } from "../../redux/user/userActions";

import { auth } from "../../firebase/firebase.utils";

import {
  HeaderComponent,
  LogoComponent,
  OptionsComponent,
  OptionLink,
} from "./Header.styles";

const header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderComponent>
      <LogoComponent to="/">
        <Logo className="logo" />
        <h1 className="logo" style={{ color: "#0098A6" }}>
          Royal Clothing
        </h1>
      </LogoComponent>
      <OptionsComponent>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/contact">Contact Us</OptionLink>
        {currentUser && currentUser != null ? (
          <OptionLink as="div" onClick={signOutStart}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to="/signin">Sign In</OptionLink>
        )}
        <CartIcon />
      </OptionsComponent>
      {hidden && <CartDropDown />}
    </HeaderComponent>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(header);
