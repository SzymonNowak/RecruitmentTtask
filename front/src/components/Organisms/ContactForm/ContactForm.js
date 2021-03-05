import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import useForm from "customHooks/useForm";
import validateInfo from "customHooks/validateInfo";
import { GoNextButton } from "components/Atoms/GoNextButton/GoNextButton";
const MainWrapper = styled.nav`
  display: flex;
  justify-content: center;
`;
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  width: 500px;
`;
const StyledInput = styled.input`
  margin-bottom: 10px;
  height: 40px;
  border: none;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid blue;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 10px;
  }
`;
const StyledLabel = styled.label`
  margin-bottom: 4px;
  font-weight: bold;
`;
const Error = styled.p`
  color: red;
  margin-bottom: 10px;
  font-weight: bold;
`;

const ContactForm = ({ submitForm }) => {
  const cart = useSelector((state) => state.CartReducer.order);
  const itemFromCart = [];
  cart.map((item) => {
    itemFromCart.push({
      id: item.id,
      quantity: item.quantity,
    });
  });

  const { handleChange, values, handleSubmit, errors } = useForm(
    validateInfo,
    submitForm,
    itemFromCart
  );
  return (
    <MainWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <StyledLabel htmlFor="first_name">Imie</StyledLabel>
        <StyledInput
          type="text"
          id="first_name"
          name="first_name"
          placeholder="Jan"
          value={values.first_name}
          onChange={handleChange}
        />
        {errors.first_name && <Error>{errors.first_name}</Error>}
        <StyledLabel htmlFor="last_name">Nazwisko</StyledLabel>
        <StyledInput
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Kowalski"
          value={values.last_name}
          onChange={handleChange}
        />
        {errors.last_name && <Error>{errors.last_name}</Error>}

        <StyledLabel htmlFor="lname">Miejscowość</StyledLabel>
        <StyledInput
          type="text"
          id="city"
          name="city"
          placeholder="Gdansk"
          value={values.city}
          onChange={handleChange}
        />
        {errors.city && <Error>{errors.city}</Error>}

        <StyledLabel htmlFor="zip_code">Kod Pocztowy</StyledLabel>

        <StyledInput
          type="text"
          id="zip_code"
          name="zip_code"
          placeholder="80-432"
          value={values.zip_code}
          onChange={handleChange}
        />
        {errors.zip_code && <Error>{errors.zip_code}</Error>}

        <GoNextButton>Zamow</GoNextButton>
      </FormWrapper>
    </MainWrapper>
  );
};

export default ContactForm;
