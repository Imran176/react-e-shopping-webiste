import React from "react";
// import "./homePage.styles.scss";
import MenuItem from "../../components/menu-item/MenuItem";
import Directory from "../../components/directory/directory";

import { HomePageContainer } from "./HomePage.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
