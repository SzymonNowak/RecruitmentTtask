import React from "react";
import PropTypes from "prop-types";
import NavBar from "components/Organisms/NavBar/NavBar";

const MainUserTemaplte = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

MainUserTemaplte.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainUserTemaplte;
