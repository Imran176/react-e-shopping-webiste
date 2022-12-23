import React from "react";
import "./custom-btn.scss";

import { CustomBtnComponent } from "./CustomBtn.styles";

const CustomBtn = ({ children, ...props }) => {
  return (
    <CustomBtnComponent {...props}>
      {children}
    </CustomBtnComponent>
  );
};

export default CustomBtn;
