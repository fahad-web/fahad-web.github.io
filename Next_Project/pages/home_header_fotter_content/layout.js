import React from "react";
import Fotter from "./footer";
import Header from "./header";


const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Fotter />
    </React.Fragment>
  );
}

export default MainLayout;