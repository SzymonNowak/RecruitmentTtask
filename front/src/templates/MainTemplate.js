import React from "react";
import PropTypes from "prop-types";
import NavBar from "components/Organisms/NavBar/NavBar";

const MainTempalte = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

MainTempalte.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTempalte;
