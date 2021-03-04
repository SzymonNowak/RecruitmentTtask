import React, { useState } from "react";
import ContactForm from "components/Organisms/ContactForm/ContactForm";
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
        <div>succes</div>
      )}
    </div>
  );
};

export default MakeOrder;
