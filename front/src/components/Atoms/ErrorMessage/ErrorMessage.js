import styled from "styled-components";

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: ${({ theme }) => theme.margin.m};
  font-weight: bold;
`;
