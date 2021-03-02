import React from "react";
import PropTypes from "prop-types";
import NavBar from "components/Organisms/NavBar/NavBar";
import styled from "styled-components";

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
