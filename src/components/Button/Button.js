import styled from "styled-components";

const Button = styled.button(
  ({ theme, disabledBtn }) => `
  background-color: ${disabledBtn ? theme.colors.gray : theme.colors.blue};
  width: 100%;
  border-radius: 0.4rem;
  color: white;
  font-size: ${theme.fontSize.font_14};
  font-weight: ${theme.fontWeight.semiBold};
  line-height: 1.6rem;
  text-align: center;
  padding: 1.2rem;
  border: 1px solid ${disabledBtn ? theme.colors.gray : theme.colors.blue};
  cursor: pointer;
  transition: all 0.35s ease-in-out;

  &:hover {
    color: ${disabledBtn ? theme.colors.gray : theme.colors.blue};
    background-color: ${theme.colors.white};
    border: 1px solid ${disabledBtn ? theme.colors.gray : theme.colors.blue};
  }
  `
);

export default Button;
