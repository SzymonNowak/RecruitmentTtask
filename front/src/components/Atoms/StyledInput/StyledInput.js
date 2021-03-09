import styled from "styled-components";

export const StyledInput = styled.input`
  margin-bottom: ${({ theme }) => theme.margin.s};
  height: 40px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  &:focus {
    outline: none;
    border: none;
    border-bottom: 3px solid ${({ theme }) => theme.colors.blue};
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
