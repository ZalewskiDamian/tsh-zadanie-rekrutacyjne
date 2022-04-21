import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme, disabledBtn }) =>
    disabledBtn ? theme.colors.gray : theme.colors.blue};
  width: 100%;
  border-radius: 0.4rem;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.font_14};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1.6rem;
  text-align: center;
  padding: 1.2rem;
  border: 1px solid
    ${({ theme, disabledBtn }) =>
      disabledBtn ? theme.colors.gray : theme.colors.blue};
  cursor: pointer;
  transition: all 0.35s ease-in-out;

  &:hover {
    color: ${({ theme, disabledBtn }) =>
      disabledBtn ? theme.colors.gray : theme.colors.blue};
    background-color: white;
    border: 1px solid
      ${({ theme, disabledBtn }) =>
        disabledBtn ? theme.colors.gray : theme.colors.blue};
  }
`;

export default Button;
