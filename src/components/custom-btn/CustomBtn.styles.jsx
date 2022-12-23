import styled, { css } from "styled-components";

export const btnStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const invertedBtnStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const googleSignInBtnStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
  }
`;

const getBtnStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInBtnStyles;
  }
  return props.inverted ? invertedBtnStyles : btnStyles;
};

export const CustomBtnComponent = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 25px 0 25px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getBtnStyles}
`;
