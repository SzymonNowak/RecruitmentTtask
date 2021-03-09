import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import useForm from "customHooks/useForm";
import validateInfo from "customHooks/validateInfo";
import { GoNextButton } from "components/Atoms/GoNextButton/GoNextButton";
import { ErrorMessage } from "components/Atoms/ErrorMessage/ErrorMessage";
import { StyledInput } from "components/Atoms/StyledInput/StyledInput";
import { StyledLabel } from "components/Atoms/StyledLabel/StyledLabel";
const MainWrapper = styled.nav`
  display: flex;
  justify-content: center;
`;
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const ContactForm = ({ submitForm }) => {
  const cart = useSelector((state) => state.CartReducer.order);
  const order = [];
  cart.map((item) => {
    order.push({
      id: item.id,
      quantity: item.quantity,
    });
  });

  const { handleChange, values, handleSubmit, errors } = useForm(
    validateInfo,
    submitForm,
    order
  );
  return (
    <MainWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <StyledLabel htmlFor="first_name">First Name</StyledLabel>
        <StyledInput
          type="text"
          id="first_name"
          name="first_name"
          placeholder="Jan"
          value={values.first_name}
          onChange={handleChange}
        />
        {errors.first_name && <ErrorMessage>{errors.first_name}</ErrorMessage>}
        <StyledLabel htmlFor="last_name">Last Name</StyledLabel>
        <StyledInput
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Kowalski"
          value={values.last_name}
          onChange={handleChange}
        />
        {errors.last_name && <ErrorMessage>{errors.last_name}</ErrorMessage>}

        <StyledLabel htmlFor="city">City</StyledLabel>
        <StyledInput
          type="text"
          id="city"
          name="city"
          placeholder="Gdansk"
          value={values.city}
          onChange={handleChange}
        />
        {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}

        <StyledLabel htmlFor="zip_code">Zip Code</StyledLabel>

        <StyledInput
          type="text"
          id="zip_code"
          name="zip_code"
          placeholder="80-432"
          value={values.zip_code}
          onChange={handleChange}
        />
        {errors.zip_code && <ErrorMessage>{errors.zip_code}</ErrorMessage>}

        <GoNextButton>Order</GoNextButton>
      </FormWrapper>
    </MainWrapper>
  );
};

export default ContactForm;
