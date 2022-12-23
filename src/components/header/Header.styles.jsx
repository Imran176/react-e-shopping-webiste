// import { css } from "styled-components";
import styled from "styled-components";

import { Link } from "react-router-dom";

// const OptionContainerStyles = css`
//   padding: 10px 15px;
//   cursor: pointer;
// `;

export const HeaderComponent = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoComponent = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionsComponent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

// export const OptionDiv = styled.div`
//   ${OptionContainerStyles}
// `;
