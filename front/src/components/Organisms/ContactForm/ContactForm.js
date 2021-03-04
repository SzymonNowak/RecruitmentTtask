import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import useForm from "customHooks/useForm";
import validateInfo from "customHooks/validateInfo";
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
`;

const ContactForm = ({ submitForm }) => {
  const order = "";
  const cart = useSelector((state) => state.CartReducer.booksInCart);
  const { handleChange, values, handleSubmit, errors } = useForm(
    validateInfo,
    submitForm,
    order
  );
  return (
    <MainWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <label htmlFor="first_name">Imie</label>
        <StyledInput
          type="text"
          id="first_name"
          name="first_name"
          placeholder="Jan"
          value={values.first_name}
          onChange={handleChange}
        />
        {errors.first_name && <p>{errors.first_name}</p>}
        <label htmlFor="last_name">Nazwisko</label>
        <StyledInput
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Kowalski"
          value={values.last_name}
          onChange={handleChange}
        />
        {errors.last_name && <p>{errors.last_name}</p>}

        <label htmlFor="lname">Miejscowość</label>
        <StyledInput
          type="text"
          id="city"
          name="city"
          placeholder="Gdansk"
          value={values.city}
          onChange={handleChange}
        />
        {errors.city && <p>{errors.city}</p>}

        <label htmlFor="zip_code">Kod Pocztowy</label>

        <StyledInput
          type="text"
          id="zip_code"
          name="zip_code"
          placeholder="80-432"
          value={values.zip_code}
          onChange={handleChange}
        />
        {errors.zip_code && <p>{errors.zip_code}</p>}

        <button>Zamow</button>
      </FormWrapper>
    </MainWrapper>
  );
};

export default ContactForm;
