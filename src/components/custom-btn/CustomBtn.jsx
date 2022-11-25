import React from "react";
import "./custom-btn.scss";

const CustomBtn = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <div
      className={`${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : ""} custom-btn`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default CustomBtn;
