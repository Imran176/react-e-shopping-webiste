import React from "react";

import { CustomBtnComponent } from "./CustomBtn.styles";

const CustomBtn = ({ children, ...props }) => {
  return (
    <CustomBtnComponent {...props}>
      {children}
    </CustomBtnComponent>
  );
};

export default CustomBtn;
