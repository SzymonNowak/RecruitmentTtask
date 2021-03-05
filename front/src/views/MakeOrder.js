import React, { useState } from "react";
import styled from "styled-components";
import ContactForm from "components/Organisms/ContactForm/ContactForm";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const MakeOrder = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <div>
      {!isSubmitted ? (
        <ContactForm submitForm={submitForm} />
      ) : (
        <Wrapper>
          <h1>Succes</h1>
        </Wrapper>
      )}
    </div>
  );
};

export default MakeOrder;
